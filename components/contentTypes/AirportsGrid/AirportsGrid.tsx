import React, { useEffect, useState } from 'react'
import LinkGridList, {
  LinkGridItemProps,
} from '../../molecules/LinkGridList/LinkGridList'
import ProfileOverlayBlock from '../../molecules/ProfileOverlayBlock/ProfileOverlayBlock'
import { Media } from '../../../types/CMS'
import { FormattedMessage } from 'react-intl'

const AirportsGrid = (data: any) => {
  const [open, setOpen] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<LinkGridItemProps>()

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [open])

  let airportList: LinkGridItemProps[] = []
  data.airports?.map(
    (airport: {
      title: string
      country: string
      image: Media
      readMoreText: string
      downloadable: boolean
      link?: { url: string | undefined; name: string | undefined }
      readMoreLinkText?: string
    }) => {
      airportList.push({
        title: airport.title,
        subTitle: airport.country,
        image: airport.image,
        content: airport.readMoreText,
        showLink: true,
        downloadable: airport.downloadable ? true : false,
        link: { url: airport.link?.url, name: airport.link?.name },
        bioLinkText: airport.readMoreLinkText,
      })
    }
  )

  return (
    <section className="border-b border-gray-light">
      <div className="container">
        <div className="relative">
          <LinkGridList
            itemButtonText={
              (
                <FormattedMessage
                  defaultMessage="Read more"
                  description="Phrase for read more"
                />
              ) as any
            }
            title={data.title}
            linkGridArray={airportList}
            setOpen={setOpen}
            setSelectedItem={setSelectedItem}
          />

          <ProfileOverlayBlock
            imageAltText={
              selectedItem?.image?.umbracoAlternateText! ||
              selectedItem?.image.name!
            }
            image={selectedItem?.image?.umbracoFile?.url}
            setOpen={setOpen}
            open={open}
            quoteItem={selectedItem?.quotes}
            title={selectedItem?.title!}
            subtitle={selectedItem?.subTitle!}
            content={selectedItem?.content!}
            link={selectedItem?.link}
          />
        </div>
      </div>
    </section>
  )
}
export default AirportsGrid
