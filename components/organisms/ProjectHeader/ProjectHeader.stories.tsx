import { ComponentMeta, ComponentStory } from '@storybook/react'
import ProjectHeader from './ProjectHeader'
import React from 'react'

export default {
  title: 'Organisms/Headers/ProjectHeader',
  component: ProjectHeader,
} as ComponentMeta<typeof ProjectHeader>

const Template: ComponentStory<typeof ProjectHeader> = (args) => (
  <ProjectHeader {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  breadcrumbs: [
    {
      url: '',
      text: 'Projects',
    },
  ],
  title: 'Faubourg Malepere.',
  subTitle: 'Toulouse, France',
  introText:
    'A radical 113-hectare affordable housing district. Due to come into being in the next few years. Supported by Oppidea(SEM damenagement de  Toulouse Metropole).',
  linkText: 'Contact our Building team',
  linkUrl: 'http://google.com',
}
