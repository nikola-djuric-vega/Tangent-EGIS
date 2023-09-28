import React from 'react'
import ArticleItem from '../../molecules/ArticleItem/ArticleItem'
import clsx from 'clsx'
import Heading from '../../atoms/Heading/Heading'
import { useInView, InView } from 'react-intersection-observer'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'

interface Props {
  items: Item[]
  animation?: boolean
}

interface Item {
  blueBackground: boolean
  link: { name: string; url: string }
  richText: string
  title: string
  reportCTA: { name: string; url: string }
}

const Text = (data: Props) => {
  const { animation = false } = data

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.35,
  })

  return (
    <>
      {data.items?.map(
        ({ title, richText, blueBackground, link, reportCTA }, index) => {
          return (
            <section
              role="contentinfo"
              className={clsx(
                blueBackground
                  ? 'text-item-blue bg-steel-gray-lightest md:half-steel-gray-lightest'
                  : 'text-item',
                index === data.items.length - 1 &&
                  !animation &&
                  'border-b border-gray-light',
                index === data.items.length - 1 &&
                  animation &&
                  'md:border-b border-gray-light'
              )}
              key={index}>
              <InView className={clsx(inView ? 'active' : '')}>
                <div className="container" ref={ref}>
                  <ArticleItem
                    linkText={!!link && link.name}
                    linkTo={!!link && link.url}
                    sideItem={
                      title ? (
                        <Heading level={2} hasBlackDot className="h6">
                          {title}
                        </Heading>
                      ) : (
                        reportCTA && (
                          <StylisedLink
                            type="primary"
                            linkText={reportCTA.name}
                            linkTo={reportCTA.url}
                            backgroundColour="bg-super-lime"
                            hoverColour="bg-midnight-blue"
                            textColour="text-midnight-blue"
                            textHoverColour="group-hover:text-super-lime"
                            icon={
                              <div className="transform rotate-90">
                                <ArrowIcon rightArrow width={12} height={12} />
                              </div>
                            }
                          />
                        )
                      )
                    }
                    bg={blueBackground}>
                    <article
                      className={clsx('prose', animation && 'introTextBox')}
                      dangerouslySetInnerHTML={{ __html: richText }}
                    />
                  </ArticleItem>
                </div>
              </InView>
            </section>
          )
        }
      )}
    </>
  )
}

export default Text
