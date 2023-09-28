import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SearchOverlay from './SearchOverlay'

export default {
  title: 'Organisms/SearchOverlay',
  component: SearchOverlay,
} as ComponentMeta<typeof SearchOverlay>

const Template: ComponentStory<typeof SearchOverlay> = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(true)
  return (
    <SearchOverlay
      isOverlayOpen={isOverlayOpen}
      setIsOverlayOpen={setIsOverlayOpen}
    />
  )
}

export const Primary = Template.bind({})
