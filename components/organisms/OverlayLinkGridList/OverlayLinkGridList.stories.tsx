import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import OverlayLinkGridList from './OverlayLinkGridList'
import {
  airportArray,
  peopleArray,
} from '../../molecules/LinkGridList/LinkGridList.mockData'

export default {
  title: 'Organisms/OverlayLinkGridList',
  component: OverlayLinkGridList,
} as ComponentMeta<typeof OverlayLinkGridList>

const Template: ComponentStory<typeof OverlayLinkGridList> = (args) => {
  return (
    <OverlayLinkGridList
      stylisedLink={args.stylisedLink}
      stylisedLinkUrl={args.stylisedLinkUrl}
      title={args.title}
      linkGridArray={args.linkGridArray}
      twoColumnLayout={args.twoColumnLayout}
    />
  )
}

export const AiportList = Template.bind({})
AiportList.args = {
  title: 'Our airport list',
  buttonText: 'Read more',
  linkGridArray: airportArray,
  twoColumnLayout: true,
}

export const PeopleList = Template.bind({})
PeopleList.args = {
  title: 'Our leadership team',
  buttonText: 'Read Bio',
  linkGridArray: peopleArray,
  twoColumnLayout: false,
}
