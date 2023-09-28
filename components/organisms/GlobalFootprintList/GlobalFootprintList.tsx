import React, { useEffect } from 'react'
import GlobalFootprint from '../../molecules/GlobalFootprint/GlobalFootprint'
import Heading from '../../atoms/Heading/Heading'
import { Media } from '../../../types/CMS/media'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import SwiperCore, { Keyboard, Mousewheel } from 'swiper'
import useMobile from '../../../utils/useMobile'

SwiperCore.use([Keyboard])
SwiperCore.use([Mousewheel])

export interface FootprintItemProps {
  link?: {
    url?: string
    name?: string
  }
  image?: Media
  title?: string
  text?: string
}

export interface GlobalFootprintListProps {
  footprintHeading?: string
  footprintData?: FootprintItemProps[]
}

const GlobalFootprintList = ({
  footprintHeading,
  footprintData,
}: GlobalFootprintListProps) => {
  const isMobile = useMobile()

  let magicItems: any
  let magicImages: any
  let magicTitle: any
  useEffect(() => {
    if (typeof window !== 'undefined') {
      magicItems = document.querySelectorAll('.js-magic-item')
      magicImages = document.querySelectorAll('.js-magic-image')
      magicTitle = document.querySelector('.magic-title')
      setTimeout(() => {
        document.querySelector('body')?.classList.add('loaded')
      }, 300)
    }

    function scrollMagicItems(triggerElement: any, items: any) {
      let ScrollMagic: any
      if (typeof window !== 'undefined') {
        ScrollMagic = require('scrollmagic')
        const controller = new ScrollMagic.Controller()
        new ScrollMagic.Scene({
          duration: 355,
          triggerHook: 0.2,
          triggerElement,
        })
          .addTo(controller)
          .setPin(triggerElement)
          .on('enter', function () {
            isMobile && magicTitle?.classList.add('magic-title-hidden')
            items?.forEach((el: any) =>
              el?.classList.remove('magic-item-visible')
            )
            triggerElement?.classList.add('magic-item-visible')
            updateImages(triggerElement?.index)
          })
      }
    }

    function updateImages(index: any) {
      magicImages?.forEach((img: any, i: any) => {
        if (i !== index) {
          img?.classList.remove('magic-image-visible')
        }
      })
      magicImages[index]?.classList.add('magic-image-visible')
    }

    setTimeout(() => {
      magicItems?.forEach((elem: any, i: any, items: any) => {
        elem.index = i
        scrollMagicItems(elem, items)
      })
    }, 500)
  }, [magicItems, magicImages])

  const grids: Grid[] = [
    {
      align: 'middle',
      alignMobile: 'right',
      desktopStartColumn: 3,
      mobileStartColumn: 3,
    },
    {
      align: 'right',
      alignMobile: 'middle',
      desktopStartColumn: 8,
    },
  ]

  return (
    // <div className="relative">
    //   <GridLines
    //     endLineDesktop
    //     endLineMobile
    //     colour="bg-teal-blue"
    //     grids={grids}
    //   />

    <>
      <div className="magic-images">
        <Heading
          level={4}
          className="text-white lg:-ml-10 magic-title h6 magic-image-text-offset"
          hasWhiteDot
        >
          {footprintHeading}
        </Heading>
        {footprintData &&
          footprintData.map((item, index) => (
            <GlobalFootprint image={item?.image} key={index} />
          ))}
      </div>
      <div className="magic-list">
        {footprintData &&
          footprintData.map((item, index) => (
            <div
              className="magic-item js-magic-item"
              key={index}
              id="globalFootprint"
            >
              <GlobalFootprint
                linkTo={item?.link}
                title={item?.title}
                description={item?.text}
              />
            </div>
          ))}
      </div>
    </>
    // </div>
  )
}

export default GlobalFootprintList
