import React from 'react'
import { ComponentMeta } from '@storybook/react'

import Heading from './Heading'

export default {
  title: 'Atoms/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

export const All = () => (
  <>
    <Heading level={1} hasGreenFlare>
      H1 The quick brown fox jumped over the lazy dog.
    </Heading>
    <Heading level={2}>H2 The quick brown fox jumped over the lazy dog</Heading>
    <Heading level={3}>H3 The quick brown fox jumped over the lazy dog</Heading>
    <Heading level={4}>H4 The quick brown fox jumped over the lazy dog</Heading>
    <Heading level={5}>H5 The quick brown fox jumped over the lazy dog</Heading>
    <Heading level={6}>H6 The quick brown fox jumped over the lazy dog</Heading>
  </>
)
