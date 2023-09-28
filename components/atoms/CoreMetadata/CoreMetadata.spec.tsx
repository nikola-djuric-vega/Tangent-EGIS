import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import CoreMetadata from './CoreMetadata'
import { CmsPage, LinkType, PageTypeNames } from '../../../types/CMS'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: function Head({
      children,
    }: {
      children: Array<React.ReactElement>
    }) {
      return <>{children}</>
    },
  }
})

const mockData: CmsPage = {
  __typename: PageTypeNames.HOME_PAGE,
  name: 'Home Page',
  url: '/home-page/',
  seoTitle: 'Egis Homepage',
  seoDescription: 'Egis Meta Description',
  hideFromSearchEngines: false,
  oGTitle: 'Egis',
  oGType: 'homepage',
  oGImage: {
    name: 'image',
    createDate: '',
    id: '',
    level: 1,
    mediaTypeAlias: 'image',
    sortOrder: 1,
    url: 'https://image.img',
  },
  oGDescription: 'Egis OG description',
  oGUrl: {
    url: '/home-page/',
    name: 'Home page',
    linkType: LinkType.CONTENT,
  },
  oGLocale: 'en_US',
  oGLocaleAlternate: ['fr'],
  pageTitle: '',
  introductionText: '',
  relatedContentTag: [],
  relatedContentTypes: [],
  id: '43fb8d0e-ddf0-48ef-8296-07059f9293ba',
  contentTypeAlias: 'homePage',
}

describe('CoreMetadata', () => {
  it('should render metadata title', async () => {
    const { baseElement } = render(<CoreMetadata data={mockData} />)

    await waitFor(() => {
      expect(baseElement).toMatchSnapshot()
    })
  })
})
