import {
  FieldType,
  Form,
  FormConditionActionType,
  FormConditionLogicType,
  FormConditionRuleOperatorType,
  FormFieldIndicationType,
} from '../../../types/CMS'

export const mockFormData: Form = {
  _id: '5d6ff18b-864e-47c3-9715-3cee25ffc9d5',
  indicator: '*',
  name: 'Every field',
  nextLabel: 'Next',
  previousLabel: 'Previous',
  submitLabel: 'Submit',
  disableDefaultStylesheet: false,
  fieldIndicationType: FormFieldIndicationType.MARK_MANDATORY_FIELDS,
  hideFieldValidation: false,
  messageOnSubmit: '0',
  showValidationSummary: false,
  emailTo: 'test@test.com',
  pageName: 'Page Name',
  setIsLoading: () => {},
  pages: [
    {
      caption: 'Page 1',
      fieldsets: [
        {
          columns: [
            {
              width: 12,
              fields: [
                {
                  caption: 'Consent for storing submitted data',
                  alias: 'dictionarySomeValue',
                  required: true,
                  requiredErrorMessage:
                    'Consent is required to store and process the data in this form.',
                  settings: {
                    defaultValue: 'homepage.searchbar',
                  },
                  type: FieldType.HIDDEN,
                },
                {
                  caption: 'Consent for storing submitted data',
                  alias: 'dataConsent',
                  required: true,
                  requiredErrorMessage:
                    'Consent is required to store and process the data in this form.',
                  settings: {
                    acceptCopy:
                      'Yes, I give permission to store and process my data',
                    defaultValue: '',
                  },
                  type: FieldType.DATA_CONSENT,
                },
                {
                  caption: 'Short answer',
                  helpText: 'Short answer help text',
                  alias: 'shortAnswer',
                  required: true,
                  requiredErrorMessage:
                    'Please provide a value for Short answer',
                  settings: {
                    placeholder: 'Short answer placeholder',
                    pattern: '[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+',
                    patternInvalidErrorMessage:
                      'Please provide a valid email address',
                    defaultValue: '',
                  },
                  type: FieldType.TEXT,
                },
                {
                  caption: 'Long answer',
                  helpText: 'Longer answer help text',
                  alias: 'longAnswer',
                  required: true,
                  requiredErrorMessage:
                    'Please provide a value for Long answer',
                  settings: {
                    placeholder: 'Long answer',
                    defaultValue: '',
                  },
                  type: FieldType.TEXT,
                },
                {
                  caption: 'Date',
                  helpText: 'Date help text',
                  alias: 'date',
                  required: true,
                  requiredErrorMessage: 'Please select a date',
                  settings: {
                    defaultValue: '',
                  },
                  type: FieldType.DATE,
                },
                {
                  caption: 'Checkbox',
                  helpText: 'Checkbox help text',
                  alias: 'checkbox',
                  required: true,
                  requiredErrorMessage: 'Please provide a value for Checkbox',
                  settings: {
                    defaultValue: '',
                  },
                  type: FieldType.CHECKBOX,
                },
                {
                  caption: 'Password',
                  helpText: 'Password help text',
                  alias: 'password',
                  required: true,
                  requiredErrorMessage: 'Please provide a value for Password',
                  settings: {
                    defaultValue: '',
                    placeholder: '',
                  },
                  type: FieldType.PASSWORD,
                },
                {
                  caption: 'Multiple choice',
                  helpText: 'Multiple choice help text',
                  alias: 'multipleChoice',
                  required: true,
                  requiredErrorMessage:
                    'Please provide a value for Multiple choice',
                  settings: {
                    defaultValue: '',
                  },
                  preValues: ['One', 'Two', 'Three'],
                  type: FieldType.CHECKBOX_LIST,
                },
                {
                  caption: 'Dropdown',
                  helpText: 'Dropdown help text',
                  alias: 'dropdown',
                  required: true,
                  requiredErrorMessage: 'Please provide a value for Dropdown',
                  settings: {
                    defaultValue: '',
                  },
                  preValues: ['One', 'Two', 'Three'],
                  type: FieldType.SELECT,
                },
                {
                  caption: 'Single choice',
                  helpText: 'Single choice help text',
                  alias: 'singleChoice',
                  required: true,
                  requiredErrorMessage:
                    'Please provide a value for Single choice',
                  settings: {
                    defaultValue: '',
                  },
                  preValues: ['One', 'Two', 'Three'],
                  type: FieldType.RADIO,
                },
                {
                  caption: 'Title and description',
                  helpText: 'Title and description help text',
                  alias: 'titleAndDescription',
                  required: false,
                  requiredErrorMessage:
                    'Please provide a value for Title and description',
                  condition: {
                    actionType: FormConditionActionType.HIDE,
                    logicType: FormConditionLogicType.ANY,
                    rules: [
                      {
                        field: 'singleChoice',
                        operator: FormConditionRuleOperatorType.IS,
                        value: 'One',
                      },
                      {
                        field: 'dropdown',
                        operator: FormConditionRuleOperatorType.IS_NOT,
                        value: 'Two',
                      },
                      {
                        field: 'multipleChoice',
                        operator: FormConditionRuleOperatorType.CONTAINS,
                        value: 'Three',
                      },
                    ],
                  },
                  settings: {
                    defaultValue: '',
                    caption: 'Title text',
                    bodyText: 'Description text',
                  },
                  type: FieldType.TITLE_AND_DESCRIPTION,
                },
                {
                  caption: 'Postcode Lookup Allow',
                  alias: 'postcodeLookupAllow',
                  required: true,
                  requiredErrorMessage:
                    'Please provide a value for Postcode Lookup Allow',
                  settings: {
                    defaultValue: '',
                  },
                  type: FieldType.HIDDEN,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  _links: {
    self: {
      href: 'https://api.umbraco.io/forms/5d6ff18b-864e-47c3-9715-3cee25ffc9d5',
    },
  },
}
