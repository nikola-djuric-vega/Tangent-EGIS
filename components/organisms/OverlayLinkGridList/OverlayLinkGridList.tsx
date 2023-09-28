import React, { useEffect, useState } from 'react'
import LinkGridList, {
  LinkGridItemProps,
} from '../../molecules/LinkGridList/LinkGridList'
import ProfileOverlayBlock from '../../molecules/ProfileOverlayBlock/ProfileOverlayBlock'
import SimpleLinkGridList from '../../molecules/SimpleLinkGridList/SimpleLinkGridList'

import FallbackImage from '../../../public/images/people-list-fallback.png'

interface Props {
  stylisedLink?: string
  stylisedLinkUrl?: string
  twoColumnLayout?: boolean
  title?: string
  linkGridArray: LinkGridItemProps[]
  simple?: boolean
}

export default function OverlayLinkGridList({
  stylisedLink,
  stylisedLinkUrl,
  twoColumnLayout,
  title,
  linkGridArray,
  simple,
}: Props) {
  const [open, setOpen] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<LinkGridItemProps>()

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyDown(e))
    if (open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => window.removeEventListener('keydown', (e) => handleKeyDown)
  }, [open])

  return (
    <div className="relative">
      {simple ? (
        <SimpleLinkGridList
          linkGridArray={linkGridArray}
          setOpen={setOpen}
          setSelectedItem={setSelectedItem}
        />
      ) : (
        <LinkGridList
          setSelectedItem={setSelectedItem}
          stylisedLink={stylisedLink}
          stylisedLinkUrl={stylisedLinkUrl}
          setOpen={setOpen}
          title={title}
          linkGridArray={linkGridArray}
          twoColumnLayout={twoColumnLayout}
          fallbackImage={{ url: FallbackImage.src }}
        />
      )}

      <ProfileOverlayBlock
        imageAltText={
          selectedItem?.image
            ? selectedItem?.image.umbracoAlternateText! ||
              selectedItem.image.name!
            : 'Fallback image'
        }
        image={
          selectedItem?.image
            ? selectedItem?.image.umbracoFile?.url
            : FallbackImage.src
        }
        setOpen={setOpen}
        open={open}
        quoteItem={selectedItem?.quotes}
        title={selectedItem?.title!}
        subtitle={selectedItem?.subTitle!}
        content={selectedItem?.content!}
      />
    </div>
  )
}
