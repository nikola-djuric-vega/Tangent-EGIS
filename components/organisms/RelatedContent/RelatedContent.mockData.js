import TagLine from '../../atoms/TagLine/TagLine'
import React from 'react'

export default {
  title: 'Lorem ipsum',
  allNewsCTA: { url: '/', name: 'View news' },
  allInsightsCTA: { url: '/', name: 'View insights' },
  relatedItems: [
    {
      subTitle: 'Lorem ipsum',
      image: { url: '/images/test-image.png' },
      type: 'cardItem',
      linkTo: '/',
      tagLine: <TagLine time="4" additionalInfo="news" />,
    },
    {
      subTitle: 'Lorem ipsum',
      image: { url: '/images/test-image.png' },
      type: 'cardItem',
      linkTo: '/',
      tagLine: <TagLine time="4" additionalInfo="news" />,
    },
    {
      subTitle: 'Lorem ipsum',
      image: { url: '/images/test-image.png' },
      type: 'cardItem',
      linkTo: '/',
      tagLine: <TagLine time="4" additionalInfo="news" />,
    },
  ],
}
