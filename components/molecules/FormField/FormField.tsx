import React from 'react'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import Input from '../../atoms/Input/Input'
import RadioButton from '../../atoms/RadioButton/RadioButton'
import TextArea from '../../atoms/TextArea/TextArea'
import {
  Field,
  ErrorMessage as ErrorMessageWrapper,
  useFormikContext,
} from 'formik'

import { FormField as FormFieldType, FieldType } from '../../../types/CMS'
import FormConditionalWrapper from '../../hoc/FormConditionalWrapper/FormConditionalWrapper'
import Dropdown from '../../atoms/Dropdown/Dropdown'
import Recaptcha from '../../atoms/Recaptcha/Recaptcha'

export interface FormFieldComponentProps {
  field: FormFieldType
}

export type FormFieldProps = FormFieldComponentProps &
  React.LabelHTMLAttributes<HTMLLabelElement>

const FormField = ({ field }: FormFieldProps) => {
  const { setFieldValue, values, touched, errors } = useFormikContext()
  const fieldId = field.alias

  const getError = (fieldId: string) => {
    const isTouched = Object.keys(touched).find((field) => field === fieldId)
    const isError = Object.keys(errors).find((field) => field === fieldId)
    return isTouched && isError ? true : false
  }

  const excludeLabelFromFields = [
    FieldType.CHECKBOX,
    FieldType.DATA_CONSENT,
    FieldType.TITLE_AND_DESCRIPTION,
    FieldType.HIDDEN,
  ]

  interface Dictionary {
    [key: string]: string
  }
  const dictionary: Dictionary = {
    'homepage.searchbar': '<p>Rich text dictionary values testing</p>',
  }

  const Comp = () => {
    switch (field.type) {
      case FieldType.CHECKBOX:
        return (
          <Field
            as={Checkbox}
            name={fieldId}
            value={field.caption}
            text={field.caption}
            hasError={getError(fieldId)}
            id={fieldId}
          />
        )

      case FieldType.CHECKBOX_LIST:
        // TODO: Pass field.preValues to Checkbox to render multiple checkboxes
        return (
          <>
            <label htmlFor={fieldId} className="h6 mb-2 block">
              {field.caption}
              {field.required && '*'}
            </label>
            {field.preValues.map((value, index) => (
              <div
                key={index}
                className={'styles.checkboxListItem'}
                id={`${fieldId} ${index}`}
              >
                <Field
                  as={Checkbox}
                  name={fieldId}
                  value={value}
                  text={value}
                  hasError={getError(fieldId)}
                  id={`${fieldId}-${value}`}
                />
              </div>
            ))}
          </>
        )

      case FieldType.DATA_CONSENT:
        return (
          <Field
            name={fieldId}
            value={field.settings.acceptCopy}
            as={Checkbox}
            text={`${field.settings.acceptCopy}${field.required ? '*' : ''}`}
            hasError={getError(fieldId)}
            id={fieldId}
          />
        )

      case FieldType.DATE:
        return (
          <p>Calendar placeholder</p>
          /*<Calendar
            name={fieldId}
            placeholder={`${new Date().toLocaleDateString()}`}
          />*/
        )

      case FieldType.PASSWORD:
        /*return <Field as={InputPassword} id={fieldId} name={fieldId} />*/
        return (
          <Field
            as={Input}
            id={fieldId}
            name={fieldId}
            hasError={getError(fieldId)}
          />
        )

      case FieldType.RADIO:
        return (
          <div>
            {field.preValues.map((value, index) => (
              <div className={'styles.listItem'} key={index}>
                <Field
                  as={RadioButton}
                  name={fieldId}
                  value={value}
                  hasError={getError(fieldId)}
                  id={`${fieldId}--${index}`}
                  setOption={(value: any) => setFieldValue(fieldId, value)}
                />
              </div>
            ))}
          </div>
        )

      case FieldType.SELECT:
        return (
          <div className="flex items-center">
            <div className="w-full">
              <Dropdown
                name={fieldId}
                placeholder={
                  field.required ? field.caption + '*' : field.caption
                }
                hasError={getError(fieldId)}
                change={(value) => console.log(value)}
                options={field.preValues?.map((value) => ({
                  value: value,
                  label: value,
                }))}
              />
            </div>
          </div>
        )

      case FieldType.TEXT:
        return (
          <Field
            as={Input}
            id={fieldId}
            name={fieldId}
            hasError={getError(fieldId)}
            label={field.required ? field.caption + '*' : field.caption}
          />
        )
      case FieldType.TEXTAREA:
        return (
          <Field
            as={TextArea}
            id={fieldId}
            name={fieldId}
            hasError={getError(fieldId)}
            errorMessage={field.requiredErrorMessage}
            label={field.required ? field.caption + '*' : field.caption}
          />
        )
      case FieldType.TITLE_AND_DESCRIPTION:
        return (
          <p>Title and description field</p>
          /*<TitleAndDescription
            title={field.settings.caption}
            description={field.settings.bodyText}
          />*/
        )
      case FieldType.HIDDEN:
        if (field.alias.startsWith('dictionary')) {
          return (
            <p>Hidden field</p>
            /*<RichText
              text={dictionary[field.settings.defaultValue]}
              size={TextSizes.TEXT_BODY_1}
            />*/
          )
        }
      case FieldType.RECAPTCHA:
        return <Recaptcha> </Recaptcha>
    }
  }

  return (
    <FormConditionalWrapper formValues={values} condition={field.condition}>
      <div className={'mt-10'}>
        {Comp()}
        <ErrorMessageWrapper name={fieldId}>
          {(msg) => <span className="tag text-red mt-2">{msg}</span>}
        </ErrorMessageWrapper>
      </div>
    </FormConditionalWrapper>
  )
}

export default FormField
