import React from 'react'
import Accordion from '../../organisms/Accordion/Accordion'
import OverlayLinkGridList from '../../organisms/OverlayLinkGridList/OverlayLinkGridList'
import { LinkGridItemProps } from '../../molecules/LinkGridList/LinkGridList'
import { Media } from '../../../types/CMS'

interface AccordionItemProps {
  title: string
  content: React.ReactNode
}

interface PeopleAccordionItemProps {
  title: string
  people: PersonProps[]
}

interface PersonProps {
  personName: string
  image: Media
  role: string
  biography: string
}

const AccordionComponent = (data: any) => {
  let items: AccordionItemProps[] = []
  let people: LinkGridItemProps[] = []
  data.accordionItems?.map((accordionItem: PeopleAccordionItemProps) => {
    people = accordionItem.people?.map((person: any) => {
      return {
        title: person.personName,
        image: person.image,
        subTitle: person.role,
        content: person.biography,
        showLink: person.showBioLink,
        bioLinkText: person.bioLinkText,
        downloadable: false,
        quotes: person.quotes,
      }
    })
    items.push({
      title: accordionItem.title,
      content: <OverlayLinkGridList linkGridArray={people} simple />,
    })
  })

  return <Accordion title={data.title} items={items} />
}

export default AccordionComponent
