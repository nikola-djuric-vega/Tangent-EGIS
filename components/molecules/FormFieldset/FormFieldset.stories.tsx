import React from 'react'
import { Story, Meta } from '@storybook/react'
import FormFieldset, { FormFieldsetProps } from './FormFieldset'
import { mockFormData } from '../../organisms/FormPage/mock-form-data'
import { Formik } from 'formik'

const formFieldset = mockFormData.pages[0].fieldsets[0]

export default {
  title: 'Molecules/FormFieldset',
  component: FormFieldset,
} as Meta

const Template: Story<FormFieldsetProps> = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <FormFieldset {...args} />
  </Formik>
)

export const Primary = Template.bind({})
Primary.args = {
  fieldset: formFieldset,
}
