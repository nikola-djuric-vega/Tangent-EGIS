import React from 'react'
import { render, screen } from '@testing-library/react'
import DynamicForm from './DynamicForm'

import { mockFormData } from '../FormPage/mock-form-data'

describe('DynamicForm', () => {
  it('should render DynamicForm', () => {
    const { container } = render(<DynamicForm {...mockFormData} />)
    expect(container.firstChild).toBeTruthy()
  })
})
