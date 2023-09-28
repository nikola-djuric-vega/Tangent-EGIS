import { FormikValues } from 'formik'

export interface FormConditionRule {
  field: string
  operator: FormConditionRuleOperatorType
  value: string
}

export enum FormConditionRuleOperatorType {
  IS = 'IS',
  IS_NOT = 'IS_NOT',
  GREATER_THEN = 'GREATER_THEN',
  LESS_THEN = 'LESS_THEN',
  CONTAINS = 'CONTAINS',
  STARTS_WITH = 'STARTS_WITH',
  ENDS_WITH = 'ENDS_WITH',
}

export interface FormCondition {
  actionType: FormConditionActionType
  logicType: FormConditionLogicType
  rules: FormConditionRule[]
}

export enum FormButton {
  PREVIOUS = 'previousButton',
  SUBMIT = 'submitButton',
  NEXT = 'nextButton',
}

export enum FormConditionLogicType {
  ALL = 'ALL',
  ANY = 'ANY',
}

export enum FormConditionActionType {
  SHOW = 'SHOW',
  HIDE = 'HIDE',
}

export enum FormCustomFields {
  CUSTOM_BUTTON = 'Button',
  RICH_TEXT = 'richText',
  POSTCODE_LOOKUP = 'postcodeLookup',
  POSTCODE_LOOKUP_ALLOW = 'postcodeLookupAllow',
  POSTCODE_LOOKUP_MANUAL = 'postcodeLookupManual',
  FILE_UPLOAD = 'fileUpload',
  FILE_UPLOAD_MULTIPLE = 'fileUploadMultiple',
  APPOINTMENT_PICKER = 'appointmentPicker',
}

export interface FormFieldBase {
  caption: string
  alias: string
  required: boolean
  requiredErrorMessage?: string
  settings: {
    defaultValue: string
    pattern?: string
    patternInvalidErrorMessage?: string
  }
  type: FieldType
  helpText?: string
  condition?: FormCondition
}

export interface FormFieldConsent extends FormFieldBase {
  settings: {
    defaultValue: string
    pattern?: string
    patternInvalidErrorMessage?: string
    acceptCopy?: string
  }
  type: FieldType.DATA_CONSENT
}

export interface FormFieldText extends FormFieldBase {
  settings: {
    pattern?: string
    patternInvalidErrorMessage?: string
    defaultValue: string
    placeholder?: string
  }
  type: FieldType.TEXT
}

export interface FormFieldTextarea extends FormFieldBase {
  settings: {
    pattern?: string
    patternInvalidErrorMessage?: string
    defaultValue: string
    placeholder: string
  }
  type: FieldType.TEXTAREA
}

export interface FormFieldCheckbox extends FormFieldBase {
  settings: {
    pattern?: string
    patternInvalidErrorMessage?: string
    defaultValue: string
  }
  type: FieldType.CHECKBOX
}

export interface FormFieldPassword extends FormFieldBase {
  settings: {
    pattern?: string
    patternInvalidErrorMessage?: string
    defaultValue: string
    placeholder?: string
  }
  type: FieldType.PASSWORD
}

export interface FormFieldCheckboxList extends FormFieldBase {
  preValues: string[]
  type: FieldType.CHECKBOX_LIST
}

export interface FormFieldSelect extends FormFieldBase {
  preValues: string[]
  type: FieldType.SELECT
}

export interface FormFieldRadio extends FormFieldBase {
  preValues: string[]
  type: FieldType.RADIO
}

export interface FormFieldTitleDescription extends FormFieldBase {
  settings: {
    patternInvalidErrorMessage?: string
    pattern?: string
    defaultValue: string
    caption?: string
    bodyText?: string
  }
  type: FieldType.TITLE_AND_DESCRIPTION
}

export interface FormFieldDate extends FormFieldBase {
  type: FieldType.DATE
}

export interface FormFieldReCaptcha extends FormFieldBase {
  type: FieldType.RECAPTCHA
}

export interface FormFieldHidden extends FormFieldBase {
  alias: string | FormCustomFields
  settings: {
    defaultValue: string | FormButton
    pattern?: string
    patternInvalidErrorMessage?: string
  }
  type: FieldType.HIDDEN
}

export type FormField =
  | FormFieldTitleDescription
  | FormFieldRadio
  | FormFieldSelect
  | FormFieldCheckboxList
  | FormFieldPassword
  | FormFieldCheckbox
  | FormFieldTextarea
  | FormFieldText
  | FormFieldConsent
  | FormFieldDate
  | FormFieldReCaptcha
  | FormFieldHidden

export interface FormFieldsetColumn {
  width: number
  fields: FormField[]
}

export interface FormFieldset {
  caption?: string
  columns: FormFieldsetColumn[]
}

export interface FormPage {
  fieldsets: FormFieldset[]
  caption?: string
}

export interface Form {
  _id: string
  indicator?: string
  name?: string
  nextLabel?: string
  previousLabel?: string
  submitLabel?: string
  disableDefaultStylesheet: boolean
  fieldIndicationType: FormFieldIndicationType
  hideFieldValidation: boolean
  messageOnSubmit?: string
  showValidationSummary: boolean
  pages: FormPage[]
  emailTo: string
  pageName: string
  linkTo?: { name: string; url: string }
  _links: {
    self: {
      href: string
    }
  }
  error?: object
  setIsLoading(visible: boolean): void
}
export interface FormData {
  id: string
  formData: FormikValues
  formType: string
  emailTo: string
  pageName: string
}

export enum FormFieldIndicationType {
  NO_INDICATOR = 'NO_INDICATOR',
  MARK_MANDATORY_FIELDS = 'MARK_MANDATORY_FIELDS',
  MARK_OPTIONAL_FIELDS = 'MARK_OPTIONAL_FIELDS',
}

export enum FieldType {
  TITLE_AND_DESCRIPTION = 'titleAndDescription',
  RADIO = 'radio',
  SELECT = 'select',
  CHECKBOX_LIST = 'checkboxList',
  PASSWORD = 'password',
  CHECKBOX = 'checkbox',
  DATE = 'date',
  TEXTAREA = 'textarea',
  TEXT = 'text',
  DATA_CONSENT = 'dataConsent',
  RECAPTCHA = 'recaptcha2',
  HIDDEN = 'hidden',
}
