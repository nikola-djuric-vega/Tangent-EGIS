import React from 'react'
import Accordion from '../../organisms/Accordion/Accordion'
import GenericLandingComponent from '../../molecules/GenericLandingComponent/GenericLandingComponent'
import { Media } from '../../../types/CMS'

interface AwardListItemsProps {
  name: string
  url: string
  image?: Media
  introductionText?: string
  label?: string
}

interface AwardItemProps {
  year: string
  awardListItems: AwardListItemsProps[]
}

const AwardList = (data: any) => {
  let awardItems: any = []
  data.awardItems?.map((awardItem: AwardItemProps) => {
    const content = (
      <div className="grid gap-5 md:gap-10">
        {awardItem.awardListItems?.map((awardListItem: any, index) => {
          return (
            <GenericLandingComponent
              key={index}
              linkTo={awardListItem.url}
              image={awardListItem.image}
              title={awardListItem.name}
              content={awardListItem.introductionText}
              firstTag={awardListItem.label}
            />
          )
        })}
      </div>
    )
    awardItems.push({
      title: awardItem.year,
      content: content,
    })
  })
  return <Accordion title={data.title} items={awardItems} />
}

export default AwardList
