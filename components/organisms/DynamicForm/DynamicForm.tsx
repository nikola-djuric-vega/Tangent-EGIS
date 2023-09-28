import {
  Form as FormType,
  FormPage as FormPageType,
  FormField,
  FormFieldset,
  FormData,
} from '../../../types/CMS/form'
import FormPage from '../FormPage/FormPage'
import {
  FormFieldDetails,
  YupArraySchema,
  YupStringSchema,
} from '../../../utils/formField'
import { useState, useEffect } from 'react'
import { Form, Formik, FormikHelpers, FormikValues } from 'formik'
import * as Yup from 'yup'
import Button from '../../atoms/Button/Button'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import axios from 'axios'
import { gaTrack } from '../../../utils/ga-track'
import Router, { useRouter } from 'next/router'
import { transformUrl } from '../../../utils/helpers'
import { dataLayerSend } from '../../../utils/dataLayerSend'

const DynamicForm = ({
  _id,
  pages,
  nextLabel,
  submitLabel,
  name,
  emailTo,
  pageName,
  linkTo,
  setIsLoading,
}: FormType) => {
  const [activePage, setActivePage] = useState(0)
  const { fieldsets, caption } = pages[activePage]
  const isLastStep = activePage === pages.length - 1
  const [proceedingLabel, setProceedingLabel] = useState(
    isLastStep ? submitLabel : nextLabel
  )

  const getProceedingLabel = () => {
    fieldsets.forEach((fieldset: FormFieldset) => {
      if (fieldset.columns !== null && fieldset.columns !== undefined) {
        fieldset.columns[0].fields.forEach((field: FormField) => {
          const labelToCheck = isLastStep ? 'submitButton' : 'nextButton'
          if (field.type === 'hidden' && field.alias === labelToCheck) {
            setProceedingLabel(field.settings.defaultValue)
          }
        })
      }
    })
  }

  const { locale } = useRouter()
  const isEnglish = locale === 'en'

  useEffect(() => {
    getProceedingLabel()
  }, [activePage])

  const getInitialValues = (pages: FormPageType[]) => {
    let allValues = {}
    pages.map((page) => {
      page.fieldsets.map((set) => {
        set.columns[0]?.fields.map((field: FormField) => {
          if (FormFieldDetails[field.type]?.isIncluded) {
            Object.assign(allValues, {
              [field.alias]: field.settings.defaultValue,
            })
          }
        })
      })
    })

    return allValues
  }

  const setValidationSchema = (page: FormPageType) => {
    let schema = {}
    page.fieldsets.map((set: FormFieldset) => {
      set.columns[0].fields.map((field: FormField) => {
        const toBeValidated =
          FormFieldDetails[field.type].shouldValidate ||
          FormFieldDetails[field.type].subFields?.[field.settings.defaultValue]
            ?.shouldValidate

        if (toBeValidated) {
          let validator =
            FormFieldDetails[field.type]?.primitiveType ||
            FormFieldDetails[field.type].subFields?.[
              field.settings.defaultValue
            ]?.primitiveType

          let customValidation =
            FormFieldDetails[field.type].subFields?.[
              field.settings.defaultValue
            ]?.customValidation

          const isString =
            field.settings.pattern &&
            (FormFieldDetails[field.type].validation === 'string' ||
              FormFieldDetails[field.type].subFields?.[
                field.settings.defaultValue
              ]?.validation === 'string')

          const isArray =
            field.required &&
            (FormFieldDetails[field.type].validation === 'array' ||
              FormFieldDetails[field.type].subFields?.[
                field.settings.defaultValue
              ]?.validation === 'array')

          if (field.required) {
            validator = validator?.['required'](field.requiredErrorMessage)
          }

          switch (true) {
            case isString:
              validator = (validator as YupStringSchema).matches(
                new RegExp(field.settings.pattern as string),
                field.settings.patternInvalidErrorMessage
              )
              break
            case isArray:
              validator = (validator as YupArraySchema).min(
                1,
                field.requiredErrorMessage
              )
              validator
          }
          Object.assign(schema, {
            [field.alias]: customValidation
              ? customValidation(
                  field.requiredErrorMessage as string,
                  field.required,
                  field.alias
                )
              : validator,
          })
        }
      })
    })
    return Yup.object().shape(schema)
  }

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (isLastStep) {
      setIsLoading(true)
      const data: FormData = {
        id: _id,
        formData: values,
        formType: name!,
        emailTo: emailTo,
        pageName: pageName,
      }
      await axios
        .post(process.env.NEXT_PUBLIC_FORM_SUBMISSION_API!, data)
        .then((res) => {
          dataLayerSend({
            event: 'form_submission',
            form_name: name!,
          })

          if (name?.toLowerCase().includes('get in touch')) {
            const query = [...(Router.query.slug as string[])]

            if (query[0] === 'locations' || query[0] === 'implantations') {
              dataLayerSend({
                event: 'generate_lead',
                region: query[1] + '/' + query[2],
              })
            } else if (query[0] === 'sectors' || query[0] === 'activites') {
              dataLayerSend({
                event: 'generate_lead',
                sector: query[1],
              })
            } else if (query[0] === 'how-we-help' || query[0] === 'services') {
              dataLayerSend({
                event: 'generate_lead',
                service: query[1],
              })
            }
          } else {
            dataLayerSend({
              event: 'sign_up',
            })
          }

          if (linkTo) {
            Router.push(transformUrl(linkTo!.url))
          } else {
            Router.push(isEnglish ? '/thank-you' : '/fr/merci')
          }
        })
        .catch((error) => {
          console.log('form submission error: ', error.message)
          return error
        })
    } else {
      setActivePage(activePage + 1)
      actions.setTouched({})
      actions.setSubmitting(false)
    }
  }

  return (
    <>
      <Formik
        initialValues={getInitialValues(pages)}
        onSubmit={handleSubmit}
        validationSchema={setValidationSchema(pages[activePage])}
      >
        {() => {
          return (
            <Form id={_id}>
              <FormPage fieldsets={fieldsets} caption={caption} />
              <div className={'my-7 flex justify-end'}>
                <Button
                  onClick={() => {}}
                  type="primary"
                  buttonText={proceedingLabel!}
                  backgroundColour="bg-super-lime"
                  hoverColour="bg-midnight-blue"
                  textColour="text-midnight-blue"
                  textHoverColour="group-hover:text-super-lime"
                  icon={<ArrowIcon rightArrow width={17} height={20} />}
                />
              </div>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

export default DynamicForm
