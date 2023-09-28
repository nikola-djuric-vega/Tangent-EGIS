import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import GridLines from './GridLines'

export default {
  title: 'Atoms/GridLines',
  parameters: {
    docs: {
      description: {
        component: `
      You can either create an array of objects somewhere in your code or inline one 

    const grid = [{
        colour: 'bg-gray-light',
        desktopStartColumn: 2,
        mobileStartColumn: 1,
        align: 'middle',
        alignMobile: 'left',
      }]

    <GridLines grid={grid} />

    When using more than one grid line, make sure to have the columns in order -

    ✅ desktopStartColumn: 2, desktopStartColumn: 5
    ❌ desktopStartColumn: 5, desktopStartColumn: 2`,
      },
    },
  },
  component: GridLines,
} as ComponentMeta<typeof GridLines>

const Template: ComponentStory<typeof GridLines> = (args) => (
  <GridLines {...args} />
)

export const Grids = Template.bind({})
Grids.args = {
  grids: [
    {
      desktopStartColumn: 2,
      mobileStartColumn: 2,
      align: 'middle',
      alignMobile: 'left',
    },
    {
      desktopStartColumn: 4,
      align: 'right',
      alignMobile: 'middle',
    },
    {
      desktopStartColumn: 9,
      mobileStartColumn: 4,
      align: 'middle',
      alignMobile: 'middle',
    },
  ],
  endLineMobile: true,
  endLineDesktop: true,
  colour: 'bg-gray-light',
}
