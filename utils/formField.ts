import * as Yup from 'yup'
import { AnyObject } from 'yup/lib/types'
//import { AddressSubmit } from '_types/local'
//import { generateTime } from '_utils/generate-time'
//import { checkHourSlot } from './check-hour-slot'
/*import {
  postcodeLookupValidation,
  postcodeDefaultValue,
} from './postcode-lookup-validation'*/

export interface FileFormat {
  ext: string
  type: string
}

export const SUPPORTED_FORMATS: Array<FileFormat> = [
  { ext: '.jpg', type: 'image/jpg' },
  { ext: '.jpeg', type: 'image/jpeg' },
  { ext: '.png', type: 'image/png' },
  { ext: '.gif', type: 'image/gif' },
  { ext: '.pdf', type: 'application/pdf' },
  { ext: '.doc', type: 'application/msword' },
  {
    ext: '.docx',
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  },
  { ext: '.xls', type: 'application/vnd.ms-excel' },
  {
    ext: '.xlsx',
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  },
  { ext: '.ppt', type: 'application/vnd.ms-powerpoint' },
  { ext: '.dng', type: 'image/DNG' },
  { ext: '.dwg', type: 'application/acad' },
]

export type YupStringSchema = Yup.StringSchema<
  string | undefined,
  Record<string, any>,
  string | undefined
>

export type YupNumberSchema = Yup.NumberSchema

export type YupArraySchema = Yup.ArraySchema<
  Yup.AnySchema<any, any, any>,
  AnyObject,
  any[] | undefined
>

export type defaultValue = {
  [key: string]: string | boolean
}

export type subFieldsType = {
  shouldValidate: boolean
  isIncluded: boolean
  primitiveType?: YupStringSchema | YupArraySchema | YupNumberSchema
  customValidation?: (
    msg: string,
    required: boolean,
    fieldId?: string
  ) => Yup.AnySchema
  validation: string
  defaultValue?: defaultValue //| AddressSubmit
}

export interface FormFieldDetail {
  [key: string]: {
    shouldValidate?: boolean
    isIncluded?: boolean
    subFields?: { [key: string]: subFieldsType } | null
    validation?: string
    primitiveType?: YupStringSchema | YupArraySchema | YupNumberSchema
  }
}

export const FormFieldDetails: FormFieldDetail = {
  radio: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.string(),
    validation: 'string',
  },
  select: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.string(),
    validation: 'string',
  },
  checkboxList: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.array(),
    validation: 'array',
  },
  date: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.string(),
    validation: 'string',
  },
  checkbox: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.array(),
    validation: 'array',
  },
  text: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.string(),
    validation: 'string',
  },
  dataConsent: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.array(),
    validation: 'array',
  },
  password: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.string(),
    validation: 'string',
  },
  recaptcha2: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.number().min(0.5).max(1),
    validation: 'number',
  },
  titleAndDescription: {
    shouldValidate: false,
    isIncluded: false,
    primitiveType: Yup.string(),
    validation: 'string',
  },
  textarea: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.string(),
    validation: 'string',
  },
  hidden: {
    subFields: {
      richText: {
        shouldValidate: false,
        isIncluded: false,
        primitiveType: Yup.string(),
        validation: 'string',
      },
      /*postcodeLookup: {
        shouldValidate: true,
        isIncluded: true,
        validation: 'mixed',
        customValidation: (msg, required, fieldId) =>
          postcodeLookupValidation(required),
        defaultValue: postcodeDefaultValue,
      },
      postcodeLookupAllow: {
        shouldValidate: true,
        isIncluded: true,
        validation: 'mixed',
        customValidation: (msg, required, fieldId) =>
          postcodeLookupValidation(required),
        defaultValue: postcodeDefaultValue,
      },
      postcodeLookupManual: {
        shouldValidate: true,
        isIncluded: true,
        validation: 'mixed',
        customValidation: (msg, required, fieldId) =>
          postcodeLookupValidation(required),
        defaultValue: postcodeDefaultValue,
      },*/
      fileUpload: {
        shouldValidate: true,
        isIncluded: true,
        primitiveType: Yup.string(),
        validation: 'string',
      },
      fileUploadMultiple: {
        shouldValidate: true,
        isIncluded: true,
        primitiveType: Yup.string(),
        validation: 'string',
      },
      /*appointmentPicker: {
        shouldValidate: true,
        isIncluded: true,
        customValidation: (msg, fieldId) => {
          return Yup.object().shape({
            day: Yup.string().required(),
            noAccess: Yup.boolean(),
            timeFrom: Yup.mixed().when('noAccess', {
              is: false,
              then: Yup.mixed().test('isValid', 'time', (value, ctx) =>
                checkHourSlot(value, ctx.parent.timeUntil)
              ),
            }),
            timeUntil: Yup.mixed().when('noAccess', {
              is: false,
              then: Yup.mixed().test('isValid', 'time', (value, ctx) =>
                checkHourSlot(value, ctx.parent.timeFrom)
              ),
            }),
          })
        },
        validation: 'mixed',
        defaultValue: {
          day: '',
          noAccess: false,
          timeFrom: generateTime(0).toFormat('HH:mm'),
          timeUntil: generateTime(4).toFormat('HH:mm'),
        },
      },*/
    },
  },
}