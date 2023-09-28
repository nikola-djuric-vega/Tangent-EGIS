import React from 'react'
import { InformationItem } from '../../molecules/ThreeColumnLayout/ThreeColumnLayout'
import RelatedContent from '../../organisms/RelatedContent/RelatedContent'
import { Media } from '../../../types/CMS'

interface RelatedProjectItem {
  label: string
  image: Media
  url: string
  pageTitle: string
}

interface RelatedProjectsProps {
  title: string
  relatedProjects: RelatedProjectItem[]
  viewAllLink?: { name: string; url: string }
  blueBg?: boolean
  inlineCTA: any
  featured: boolean
}

const RelatedProjects = ({
  title,
  relatedProjects,
  viewAllLink,
  blueBg,
  inlineCTA,
  featured,
}: RelatedProjectsProps) => {
  let newRelatedContentItems: InformationItem[] = []
  relatedProjects &&
    relatedProjects.map((item: RelatedProjectItem) => {
      newRelatedContentItems.push({
        title: item.pageTitle,
        subTitle: item.label,
        image: item.image,
        type: 'cardItem',
        linkTo: item.url,
      })
    })

  return (
    newRelatedContentItems && (
      <RelatedContent
        featured={featured}
        inlineCTA={!!inlineCTA && inlineCTA[0]}
        title={title}
        relatedItems={newRelatedContentItems}
        blueBg={blueBg}
        viewAllLink={viewAllLink}
      />
    )
  )
}

export default RelatedProjects
