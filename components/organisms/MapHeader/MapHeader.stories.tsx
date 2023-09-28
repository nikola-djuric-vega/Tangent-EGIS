import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MapHeader from './MapHeader'

export default {
  title: 'Organisms/Headers/MapHeader',
  component: MapHeader,
} as ComponentMeta<typeof MapHeader>

const Template: ComponentStory<typeof MapHeader> = (args) => (
  <div className="container">
    <MapHeader {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  breadcrumb: [{ url: '', text: 'Contact Us' }],
  pageTitle: 'Contact us',
  headline: 'Global Headquarters',
  address: [
    '15, avenue du centre',
    'CS20538 Guyancourt',
    '78286 Saint-Quentin-en-Yvelines CEDEX',
    'France',
  ],
  contactNumber: '+380 44 359 0095',
  link: { name: 'Get in touch', url: 'egis.com' },

  latitude: 51.55456829996463,
  longitude: -0.10723637038030188,
}
