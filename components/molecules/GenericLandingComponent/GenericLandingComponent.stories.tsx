import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import GenericLandingComponent from './GenericLandingComponent'

export default {
  title: 'Molecules/GenericLandingComponent',
  component: GenericLandingComponent,
} as ComponentMeta<typeof GenericLandingComponent>

const Template: ComponentStory<typeof GenericLandingComponent> = (args) => (
  <div className="grid grid-cols-10">
    <GenericLandingComponent {...args} />
  </div>
)

export const Downloads = Template.bind({})
Downloads.args = {
  linkTo: 'index.html',
  image: { url: 'images/subsectorbanner.png' },
  title: 'Press Presentation - March 2019',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sem vitae neque commodo commodo convallis dictum neque. Pellentesque ac enim mollis, condimentum tortor a, ornare leo. Mauris arcu dui, vestibulum ac purus nec, egestas porta felis. Quisque ut felis dapibus, finibus urna quis, bibendum neque. Nullam non augue neque. Proin lobortis efficitur lacus non tincidunt.',
  buttonType: 'download',
  firstTag: 'May 2018',
  secondTag: '20MB',
}
