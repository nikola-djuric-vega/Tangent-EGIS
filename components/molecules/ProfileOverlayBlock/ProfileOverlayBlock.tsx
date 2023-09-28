import Image from 'next/image'
import React from 'react'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import OverlaySlider from '../../atoms/OverlaySlider/OverlaySlider'
import OverlaySliderHeader from '../../atoms/OverlaySliderHeader/OverlaySliderHeader'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import TextCarouselItem, {
  TextCarouselItemProps,
} from '../TextCarouselItem/TextCarouselItem'

interface Props {
  image: any
  title: string
  subtitle: string
  content: string
  quoteItem?: TextCarouselItemProps[]
  open: boolean
  setOpen(visible: boolean): void
  link?: { url: string | undefined; name: string | undefined }
  downloadable?: boolean
  imageAltText: string
}

export default function ProfileOverlayBlock({
  image,
  title,
  subtitle,
  content,
  quoteItem,
  open,
  setOpen,
  link,
  imageAltText,
}: Props) {
  return (
    <OverlaySlider setIsOpenSlider={() => setOpen!(!open)} isSliderOpen={open}>
      <div className="h-full flex flex-col mx-5 lg:mx-0">
        <OverlaySliderHeader
          umbracoAlternateText={imageAltText}
          image={image}
          title={title}
          subtitle={subtitle}
        />
        <div
          className="mt-6 sm:mt-10 prose"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
        <div className="mt-5 lg:mt-12">
          {!!quoteItem &&
            quoteItem.map((quoteItem, index) => {
              if (!!quoteItem.text) {
                return (
                  <TextCarouselItem
                    showQuoteIcon
                    key={index}
                    author={quoteItem.author}
                    role={quoteItem.role}
                    text={quoteItem.text}
                  />
                )
              }
            })}
        </div>

        {!!link?.url && !!link.name && (
          <div className="pb-5 md:pb-20">
            <StylisedLink
              type="secondary"
              linkText={link.name}
              linkTo={link.url}
              textColour="text-midnight-blue"
              textHoverColour="group-hover:text-white"
              hoverColour="bg-midnight-blue"
              onlyBorder
              icon={<ArrowIcon rightArrow width={17} height={20} />}
            />
          </div>
        )}
      </div>
    </OverlaySlider>
  )
}
