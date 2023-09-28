import React from 'react'
import { peopleArray } from '../SimpleLinkGridList/SimpleLinkGridList.mockData'
import OverlayLinkGridList from '../../organisms/OverlayLinkGridList/OverlayLinkGridList'

export const mockData = {
  title: 'Global leadership',
  index: 1,
  content: <OverlayLinkGridList linkGridArray={peopleArray} simple />,
}
