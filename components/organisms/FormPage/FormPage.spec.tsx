import React from 'react'
import { render, screen } from '@testing-library/react'
import FormPage from './FormPage'
import { mockFormData } from './mock-form-data'
import { Formik } from 'formik'

describe('FormPage', () => {
  it('should render FormPage', () => {
    const { container } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <FormPage {...mockFormData.pages[0]}></FormPage>
      </Formik>
    )
    expect(container.firstChild).toBeTruthy()
  })
})
