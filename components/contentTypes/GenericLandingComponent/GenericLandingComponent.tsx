import clsx from 'clsx'
import React from 'react'
import Heading from '../../atoms/Heading/Heading'

import GenericLandingItem from '../../molecules/GenericLandingComponent/GenericLandingComponent'

interface Props {
  item: {
    date: string
    link: { name: string; url: string }
    file: { name: string; url: string }
    image: { url: string }
    introTe: string
    title: string
  }[]
  title: string
}

export const GenericLandingComponent = (data: Props) => {
  return (
    <section className="border-b border-gray-light">
      <div className="container relative py-16">
        {data.title && (
          <Heading level={6} className="text-xl" hasBlackDot>
            {data.title}
          </Heading>
        )}
        {!!data?.item?.length &&
          data.item?.map((item: any, index: number) => {
            return (
              <div
                className={clsx('py-5 mx-5', {
                  'border-b border-gray-light': index < data.item.length - 1,
                })}
                key={`genericLandingItem_${index}`}
              >
                <GenericLandingItem
                  buttonType={item.file?.url ? 'download' : undefined}
                  linkTo={item.file?.url ? item.file?.url : item.link?.url}
                  linkName={item?.link?.name}
                  image={item.image}
                  title={item.title}
                  content={item.introTe}
                />
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default GenericLandingComponent
