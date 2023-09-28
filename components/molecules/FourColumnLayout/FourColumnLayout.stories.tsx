import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FourColumnInformation from './FourColumnLayout'

export default {
  title: 'Molecules/FourColumnInformation',
  component: FourColumnInformation,
} as ComponentMeta<typeof FourColumnInformation>

const Template: ComponentStory<typeof FourColumnInformation> = (args) => (
  <FourColumnInformation informationArray={args.informationArray} />
)
const richTextContent1 =
  '<p>Oppidea (SEM damenagement de Toulouse Metropole)</p>'
const richTextContent2 = '<p>Nov 2018 - Dec 2015</p>'
const richTextContent3 =
  '<p>Built to the Tier 1 France Green Standard and saved over 100000kg of carbon.</p>'
const richTextContent4 =
  '<ul><li>Finalist, Architecture +Brick Architizer A+Awards, 2020</li><li>Finalist, Architecture +Brick Architizer A+Awards, 2020</li></ul>'

export const Primary = Template.bind({})
Primary.args = {
  informationArray: [
    {
      title: 'Client.',
      introText: richTextContent1,
    },
    {
      title: 'Timeline.',
      introText: richTextContent2,
    },
    {
      title: 'Environmental Benefit.',
      introText: richTextContent3,
    },
    {
      title: 'Awards.',
      introText: richTextContent4,
    },
  ],
}
