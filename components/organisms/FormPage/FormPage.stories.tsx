import React from 'react'
import { Story, Meta } from '@storybook/react'
import { FormPage as FormPageType } from '../../../types/CMS'
import FormPage from './FormPage'
import { mockFormData } from './mock-form-data'
import { Formik } from 'formik'

const formPage = mockFormData.pages[0]

export default {
  title: 'Organisms/FormPage',
  component: FormPage,
} as Meta

const Template: Story<FormPageType> = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <FormPage {...args}></FormPage>
  </Formik>
)

export const Primary = Template.bind({})
Primary.args = formPage
