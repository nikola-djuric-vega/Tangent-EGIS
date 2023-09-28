import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ThreeColumnInformation from './ThreeColumnLayout'
import TagLine from '../../atoms/TagLine/TagLine'

export default {
  title: 'Molecules/ThreeColumnInformation',
  component: ThreeColumnInformation,
} as ComponentMeta<typeof ThreeColumnInformation>

const Template: ComponentStory<typeof ThreeColumnInformation> = (args) => (
  <div className="container">
    <ThreeColumnInformation {...args} />
  </div>
)
const richTextContent1 = (
  <div
    className="body3"
    dangerouslySetInnerHTML={{
      __html:
        '<p>We deliver over 10,000 projects at any one time across sectors and of variable technical complexity.</p>',
    }}
  ></div>
)
const richTextContent2 = (
  <div
    className="body3"
    dangerouslySetInnerHTML={{
      __html:
        '<p>Egis manages, transforms and maintains infrastructures on behalf of public and private sector owners.</p>',
    }}
  ></div>
)
const richTextContent3 = (
  <div
    className="body3"
    dangerouslySetInnerHTML={{
      __html:
        '<p>Always looking to the future, we develop strategic thinking and innovative solutions around mobility, cities, energy and engineering.</p>',
    }}
  ></div>
)

export const InfoPanel = Template.bind({})
InfoPanel.args = {
  title: 'Expertise.',
  itemType: 'infoItem',
  informationArray: [
    {
      type: 'infoPanel',
      title: 'Advisory & delivery.',
      text: richTextContent1,
      linkTo: '/',
    },
    {
      type: 'infoPanel',
      title: 'Managing & operating.',
      text: richTextContent2,
      linkTo: '/',
    },
    {
      type: 'infoPanel',
      title: 'Transformation.',
      text: richTextContent3,
      linkTo: '/',
    },
  ],
}

export const Card = Template.bind({})
Card.args = {
  mobileView: 'scroll',
  bg: true,
  stylisedLink: false,
  stylisedLinkUrl: 'http://google.com',
  linkText: 'View all',
  linkTo: 'http://google.com',
  title: 'News & insights.',
  itemType: 'cardItem',
  informationArray: [
    {
      type: 'cardItem',
      linkTo: 'index.html',
      image: { url: 'images/subsectorbanner.png' },
      tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
      title: 'Green Riyadh',
      subTitle: 'Riyadh, Saudi Arabia',
      description: 'Netus et malescuada fames ac turpis egastas integer',
    },
    {
      type: 'cardItem',
      linkTo: 'index.html',
      image: { url: 'images/subsectorbanner.png' },
      tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
      description: 'Adipiscing elit duis tristique sollicitudin',
    },
    {
      type: 'cardItem',
      linkTo: 'index.html',
      image: { url: 'images/subsectorbanner.png' },
      tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
      description: 'Adipiscing elit duis tristique sollicitudin',
    },
    {
      type: 'cardItem',
      linkTo: 'index.html',
      image: { url: 'images/subsectorbanner.png' },
      tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
      title: 'Green Riyadh',
      subTitle: 'Riyadh, Saudi Arabia',
      description: 'Netus et malescuada fames ac turpis egastas integer',
    },
    {
      type: 'cardItem',
      linkTo: 'index.html',
      image: { url: 'images/subsectorbanner.png' },
      tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
      description: 'Adipiscing elit duis tristique sollicitudin',
    },

    {
      type: 'cardItem',
      linkTo: 'index.html',
      image: { url: 'images/subsectorbanner.png' },
      tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
      description: 'Adipiscing elit duis tristique sollicitudin',
    },
  ],
}

export const inlineCTA = Template.bind({})
inlineCTA.args = {
  linkText: 'View all',
  linkTo: 'http://google.com',
  title: 'News & insights.',
  itemType: 'cardItem',
  inlineCTA: {
    link: {
      url: 'https://google.com',
      name: 'Sign me up',
    },
    title: 'Subscribe',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, na',
  },
  informationArray: [
    {
      type: 'cardItem',
      linkTo: 'index.html',
      image: { url: 'images/subsectorbanner.png' },
      tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,

      description: 'Netus et malescuada fames ac turpis egastas integer',
    },
    {
      type: 'cardItem',
      linkTo: 'index.html',
      image: { url: 'images/subsectorbanner.png' },
      tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
      description: 'Adipiscing elit duis tristique sollicitudin',
    },
    {
      type: 'cardItem',
      linkTo: 'index.html',
      image: { url: 'images/subsectorbanner.png' },
      tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
      description: 'Adipiscing elit duis tristique sollicitudin',
    },
    {
      type: 'cardItem',
      linkTo: 'index.html',
      image: { url: 'images/subsectorbanner.png' },
      tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,

      description: 'Netus et malescuada fames ac turpis egastas integer',
    },
    {
      type: 'cardItem',
      linkTo: 'index.html',
      image: { url: 'images/subsectorbanner.png' },
      tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
      description: 'Adipiscing elit duis tristique sollicitudin',
    },

    {
      type: 'cardItem',
      linkTo: 'index.html',
      image: { url: 'images/subsectorbanner.png' },
      tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
      description: 'Adipiscing elit duis tristique sollicitudin',
    },
  ],
}
export const FeaturedItems = Template.bind({})
FeaturedItems.args = {
  featured: true,
  title: 'Featured insights.',
  itemType: 'cardItem',
  inlineCTA: {
    link: {
      url: 'https://google.com',
      name: 'Sign me up',
    },
    title: 'Subscribe',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, na',
  },
  informationArray: [
    {
      title: 'A new Cayenne River crossing France',
      type: 'cardItem',
      linkTo: 'index.html',
      image: {
        featured_url:
          'http://localhost:3000/_next/image?url=https%3A%2F%2Fmedia.umbraco.io%2Fdev-egis%2Fwxroqfwt%2Fmatthew-hamilton-ru3ap8tncsk-unsplash-1-6.jpg%3Fmode%3Dcrop%26width%3D344%26height%3D255&w=3840&q=75',
      },
      tagLine: <TagLine additionalInfo="REPORT" time={15} />,
      description:
        'Since 2018, Egis have been regenerating the 113-hectare district in Toulouse’s suburb through the development of public spaces, 6,700 housing units, local shops and public facilities. ',
    },
    {
      type: 'cardItem',
      linkTo: 'index.html',
      image: {
        featured_url:
          'http://localhost:3000/_next/image?url=https%3A%2F%2Fmedia.umbraco.io%2Fdev-egis%2Fwxroqfwt%2Fmatthew-hamilton-ru3ap8tncsk-unsplash-1-6.jpg%3Fmode%3Dcrop%26width%3D344%26height%3D255&w=3840&q=75',
      },
      tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
      description: 'Adipiscing elit duis tristique sollicitudin',
    },
    {
      type: 'cardItem',
      linkTo: 'index.html',
      image: { featured_url: 'images/subsectorbanner.png' },
      tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,
      description: 'Adipiscing elit duis tristique sollicitudin',
    },
    {
      type: 'cardItem',
      linkTo: 'index.html',
      image: { featured_url: 'images/subsectorbanner.png' },
      tagLine: <TagLine time={5} additionalInfo={'NEWS'} />,

      description: 'Netus et malescuada fames ac turpis egastas integer',
    },
  ],
}
