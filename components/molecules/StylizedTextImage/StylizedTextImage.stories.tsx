import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import StylizedTextImage from './StylizedTextImage'

export default {
  title: 'Molecules/StylizedTextImage',
  component: StylizedTextImage,
} as ComponentMeta<typeof StylizedTextImage>

const Template: ComponentStory<typeof StylizedTextImage> = (args) => (
  <StylizedTextImage {...args} />
)

export const Default = Template.bind({})
Default.args = {
  image: {
    url: 'https://media.umbraco.io/dev-egis/sadfw35m/matthew-hamilton-ru3ap8tncsk-unsplash-2.jpg',
  },
  text: '<p class="body3">Malepère is a suburb of Toulouse which developed along two axes at the south-eastern entrance to Toulouse: the road to Revel bordering Saint-Orens and the road to Labège bordering Labège. Due to its disordered urbanisation, the Malepère district today presents the face of a very heterogeneous city entrance, mixing natural areas, agricultural wastelands, scattered housing and spread out activity zones.</p>\n<p class="body3">Toulouse Métropole wishes to continue the urbanization of this suburb in order to create a real life in this Toulouse district. The south-east of Toulouse is indeed very attractive, close to major business and research centers and the demand for housing is strong.</p>',
  title: 'Lorem ipsum.',
}
