import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SearchResult from './SearchResult'

export default {
  title: 'Molecules/SearchResult',
  component: SearchResult,
} as ComponentMeta<typeof SearchResult>

const Template: ComponentStory<typeof SearchResult> = (args) => (
  <div className="container">
    <div className="grid grid-cols-10">
      <SearchResult {...args} />
    </div>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  linkTo: 'index.html',
  image: { url: 'images/subsectorbanner.png' },
  title: 'Aviation',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sem vitae neque commodo commodo convallis dictum neque. Pellentesque ac enim mollis, condimentum tortor a, ornare leo. Mauris arcu dui, vestibulum ac purus nec, egestas porta felis. Quisque ut felis dapibus, finibus urna quis, bibendum neque. Nullam non augue neque. Proin lobortis efficitur lacus non tincidunt.',
  tag: 'Sector',
}

export const Featured = Template.bind({})
Featured.args = {
  linkTo: 'index.html',
  image: { url: 'images/subsectorbanner.png' },
  title: 'Aviation',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sem vitae neque commodo commodo convallis dictum neque. Pellentesque ac enim mollis, condimentum tortor a, ornare leo. Mauris arcu dui, vestibulum ac purus nec, egestas porta felis. Quisque ut felis dapibus, finibus urna quis, bibendum neque. Nullam non augue neque. Proin lobortis efficitur lacus non tincidunt.',
  tag: 'Sector',
  featured: true,
}
