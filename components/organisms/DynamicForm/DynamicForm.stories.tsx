import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Form } from '../../../types/CMS'
import DynamicForm from './DynamicForm'
import { mockFormData } from '../FormPage/mock-form-data'

export default {
  title: 'Organisms/DynamicForm',
  component: DynamicForm,
} as Meta

const Template: Story<Form> = (args) => <DynamicForm {...args} />

export const Primary = Template.bind({})
Primary.args = mockFormData
