import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import ThreeColumnLayout, { InformationItem } from './ThreeColumnLayout'
import TagLine from '../../atoms/TagLine/TagLine'

const richTextContent1 = (
  <div
    className="body3"
    dangerouslySetInnerHTML={{
      __html:
        '<p>We deliver over 10,000 projects at any one time across sectors and of variable technical complexity.</p>',
    }}
  ></div>
)

const testArray1: InformationItem[] = [
  {
    type: 'cardItem',
    linkTo: 'index.html',
    image: { url: 'images/subsectorbanner.png' },
    tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
    title: 'Green Riyadh 2',
    subTitle: 'Riyadh, Saudi Arabia',
    description: 'Netus et malescuada fames ac turpis egastas integer',
  },
  {
    type: 'infoPanel',
    title: 'Advisory & delivery',
    text: richTextContent1,
    linkTo: '/',
    image: { url: 'images/subsectorbanner.png' },
  },
  {
    type: 'cardItem',
    linkTo: 'index.html',
    image: { url: 'images/subsectorbanner.png' },
    tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
    title: 'Green Riyadh 3',
    subTitle: 'Riyadh, Saudi Arabia',
    description: 'Netus et malescuada fames ac turpis egastas integer',
  },
]

const testArray2: InformationItem[] = [
  {
    type: 'infoPanel',
    title: 'Advisory & delivery',
    text: richTextContent1,
    linkTo: '/',
    image: { url: 'images/subsectorbanner.png' },
  },
  {
    type: 'cardItem',
    linkTo: 'index.html',
    image: { url: 'images/subsectorbanner.png' },
    tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
    title: 'Green Riyadh 2',
    subTitle: 'Riyadh, Saudi Arabia',
    description: 'Netus et malescuada fames ac turpis egastas integer',
  },

  {
    type: 'cardItem',
    linkTo: 'index.html',
    image: { url: 'images/subsectorbanner.png' },
    tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
    title: 'Green Riyadh 3',
    subTitle: 'Riyadh, Saudi Arabia',
    description: 'Netus et malescuada fames ac turpis egastas integer',
  },
]

const testArray3: InformationItem[] = [
  {
    type: '1',
    title: 'Advisory & delivery',
    text: richTextContent1,
    linkTo: '/',
    image: { url: 'images/subsectorbanner.png' },
  },
  {
    type: '1',
    linkTo: 'index.html',
    image: { url: 'images/subsectorbanner.png' },
    tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
    title: 'Green Riyadh 2',
    subTitle: 'Riyadh, Saudi Arabia',
    description: 'Netus et malescuada fames ac turpis egastas integer',
  },

  {
    type: '1',
    linkTo: 'index.html',
    image: { url: 'images/subsectorbanner.png' },
    tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
    title: 'Green Riyadh 3',
    subTitle: 'Riyadh, Saudi Arabia',
    description: 'Netus et malescuada fames ac turpis egastas integer',
  },
]

const testArray4: InformationItem[] = [
  {
    type: 'infoPanel',
    title: 'Advisory & delivery',
    text: richTextContent1,
    linkTo: '/',
    image: { url: 'images/subsectorbanner.png' },
  },
  {
    type: 'cardItem',
    linkTo: 'index.html',
    image: { url: 'images/subsectorbanner.png' },
    tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
    title: 'Green Riyadh 2',
    subTitle: 'Riyadh, Saudi Arabia',
    description: 'Netus et malescuada fames ac turpis egastas integer',
  },

  {
    type: 'cardItem',
    linkTo: 'index.html',
    image: { url: 'images/subsectorbanner.png' },
    tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
    title: 'Green Riyadh 3',
    subTitle: 'Riyadh, Saudi Arabia',
    description: 'Netus et malescuada fames ac turpis egastas integer',
  },
]

describe('ThreeColumnLayout', () => {
  it('should render ThreeColumnLayout component and its items', () => {
    const { getByText } = render(
      <div>
        <ThreeColumnLayout
          mobileView="scroll"
          title="Expertise"
          itemType="infoItem"
          informationArray={testArray1}
        />
      </div>
    )
    expect(getByText('Expertise')).toBeTruthy()
    expect(getByText('Advisory & delivery')).toBeTruthy()
    expect(getByText('Green Riyadh 2')).toBeTruthy()
    expect(getByText('Green Riyadh 3')).toBeTruthy()
  })
})

describe('ThreeColumnLayout', () => {
  it('should render ThreeColumnLayout component and its card item', () => {
    const { getByText } = render(
      <div>
        <ThreeColumnLayout
          mobileView="scroll"
          title="Expertise"
          itemType="cardItem"
          informationArray={testArray2}
        />
      </div>
    )
    expect(getByText('Expertise')).toBeTruthy()
    expect(getByText('Advisory & delivery')).toBeTruthy()
    expect(getByText('Green Riyadh 2')).toBeTruthy()
    expect(getByText('Green Riyadh 3')).toBeTruthy()
  })

  it('should render ThreeColumnLayout component and its card item and blue background', () => {
    const { getByText, getByTestId } = render(
      <div>
        <ThreeColumnLayout
          bg
          title="Expertise"
          itemType="cardItem"
          informationArray={testArray2}
        />
      </div>
    )
    expect(getByText('Expertise')).toBeTruthy()
    expect(getByText('Advisory & delivery')).toBeTruthy()
    expect(getByText('Green Riyadh 2')).toBeTruthy()
    expect(getByText('Green Riyadh 3')).toBeTruthy()
    expect(getByTestId('bg-test')).toBeTruthy()
  })
})

describe('ThreeColumnLayout', () => {
  it('should render ThreeColumnLayout component with the stylisedLink', () => {
    const { getByTestId } = render(
      <ThreeColumnLayout
        mobileView="stacked"
        title="Expertise"
        itemType="infoItem"
        informationArray={testArray4}
        linkText="View all"
        linkTo="http://google.com"
      />
    )
    expect(getByTestId('stylisedLink-testing')).toBeTruthy()
  })

  it('should render ThreeColumnLayout component with inline cta', () => {
    const { getAllByText } = render(
      <ThreeColumnLayout
        inlineCTA={{
          title: 'Egis inline cta text',
          text: 'Subscribe',
          link: { url: 'egis.com', name: 'Sign me up' },
        }}
        title="Expertise"
        itemType="cardItem"
        informationArray={testArray4}
        linkText="View all"
        linkTo="http://google.com"
      />
    )

    const linkText = getAllByText('Sign me up')[0]
    const titleText = getAllByText('Egis inline cta text')[0]
    const bodyText = getAllByText('Subscribe')[0]

    if (linkText && titleText && bodyText) {
      expect(linkText).toBeTruthy()
      expect(titleText).toBeTruthy()
      expect(bodyText).toBeTruthy()
    }
  })
  test('it should scroll and change left position', async () => {
    const container = render(
      <ThreeColumnLayout
        mobileView="scroll"
        title="Expertise"
        itemType="infoItem"
        informationArray={testArray4}
      />
    )
    await fireEvent.scroll(container.getByTestId('scroll'))
    expect(container.getByTestId('scroll')).toHaveStyle('left: 100')
  })
})
