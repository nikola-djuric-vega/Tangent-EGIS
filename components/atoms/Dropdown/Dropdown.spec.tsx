import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import Dropdown from './Dropdown'
import { Formik } from 'formik'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

describe('DropdownComponent', () => {
  it('should render dropdown', () => {
    const { container } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Dropdown
          name="dropdown"
          change={() => jest.fn()}
          placeholder="Subject"
          options={[{ label: 'label', value: 'value' }]}
        />
      </Formik>
    )
    expect(container.firstChild).toBeTruthy()
  })

  it('should render dropdown with error message', () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Dropdown
          name="dropdown"
          change={() => jest.fn()}
          hasError
          errorMessage="error message"
          placeholder="Subject"
          options={[{ label: 'label', value: 'value' }]}
        />
      </Formik>
    )

    expect(screen.getByText('error message')).toBeTruthy()
  })

  it('should render dropdown options', async () => {
    const { getByTestId } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Dropdown
          name="dropdown"
          change={() => jest.fn()}
          hasError
          errorMessage="error message"
          placeholder="Subject"
          options={[{ label: 'label', value: 'value' }]}
        />
      </Formik>
    )
    const dropdownButton = await getByTestId('dropdown-btn')

    if (dropdownButton) {
      await fireEvent.click(dropdownButton)
      await waitFor(() => {
        expect(getByTestId('dropdown-options')).toBeTruthy()
      })
    }
  })

  it('should render selected dropdown option', async () => {
    const { getByTestId } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Dropdown
          name="dropdown"
          change={() => jest.fn()}
          placeholder="Subject"
          options={[{ label: 'label', value: 'value' }]}
        />
      </Formik>
    )
    const dropdownButton = await getByTestId('dropdown-btn')

    if (dropdownButton) {
      await fireEvent.click(dropdownButton)

      const optionButton = await getByTestId('option-btn')

      if (optionButton) {
        await fireEvent.click(optionButton)
        await waitFor(() => {
          expect(getByTestId('label')).toBeTruthy()
        })
      }
    }
  })
})
