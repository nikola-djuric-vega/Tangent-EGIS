import React from 'react'
import { render } from '@testing-library/react'
import FourColumnLayout, { InformationItem } from './FourColumnLayout'

const richTextContent1 =
  '<p>Oppidea (SEM damenagement de Toulouse Metropole)</p>'

const testArray: InformationItem[] = [
  {
    title: 'Client.',
    introText: richTextContent1,
  },
]

describe('FourColumnLayout', () => {
  it('should render FourColumnLayout component and its items', () => {
    const { getByText } = render(
      <div>
        <FourColumnLayout informationArray={testArray} />
      </div>
    )
    expect(getByText(/Client/)).toBeTruthy()
    expect(getByText(/Oppidea/)).toBeTruthy()
  })
})
