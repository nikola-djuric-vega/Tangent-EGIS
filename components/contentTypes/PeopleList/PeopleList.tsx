import React from 'react'
import { LinkGridItemProps } from '../../molecules/LinkGridList/LinkGridList'
import OverlayLinkGridList from '../../organisms/OverlayLinkGridList/OverlayLinkGridList'
import { TextCarouselItemProps } from '../../molecules/TextCarouselItem/TextCarouselItem'
import { Media } from '../../../types/CMS'

interface person {
  personName: string
  role: string
  image: Media
  showBioLink: boolean
  biography: string
  quotes: TextCarouselItemProps[]
  bioLinkText: string
}

const PeopleList = (data: any) => {
  let linkGridArray: LinkGridItemProps[] = []
  data.teamMembers?.map((person: person) => {
    linkGridArray.push({
      title: person.personName,
      subTitle: person.role,
      image: person.image,
      showLink: person.showBioLink,
      content: person.biography,
      quotes: person.quotes,
      bioLinkText: person.bioLinkText,
    })
  })

  return (
    <section className="border-b border-gray-light">
      <div className="container">
        <OverlayLinkGridList
          stylisedLink={!!data.formPagePicker && data.formPagePicker.name}
          stylisedLinkUrl={!!data.formPagePicker && data.formPagePicker.url}
          twoColumnLayout={!data.threeColumnLayout}
          title={data.title}
          linkGridArray={linkGridArray}
        />
      </div>
    </section>
  )
}

export default PeopleList
