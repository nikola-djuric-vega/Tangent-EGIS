import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import FormField, { FormFieldProps } from './FormField'
import { mockFormData } from '../../organisms/FormPage/mock-form-data'
import { Formik } from 'formik'

const field = mockFormData.pages[0].fieldsets[0].columns[0].fields[0]

export default {
  title: 'Molecules/FormField',
  component: FormField,
} as Meta

const Template: Story<FormFieldProps> = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <FormField {...args} />
  </Formik>
)

export const Primary = Template.bind({})
Primary.args = {
  field,
}
