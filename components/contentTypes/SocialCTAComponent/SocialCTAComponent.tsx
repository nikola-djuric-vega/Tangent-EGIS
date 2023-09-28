import React from 'react'
import Heading from '../../atoms/Heading/Heading'
import SocialCTA from '../../molecules/SocialCTA/SocialCTA'

interface Props {
  socialCTAItems: {
    introText: string
    link: { name: string; url: string }
    type: 'facebook' | 'twitter' | 'linkedin'
    title: string
  }[]
  title: string
}

export default function SocialCTAComponent(data: Props) {
  return (
    <section className="border-b border-gray-light">
      <div className="container md:py-16 py-10">
        <div className="grid md:grid-cols-10 grid-cols-5 md:gap-x-10 gap-x-5">
          <div className="col-start-1 col-span-full">
            {data.title && <Heading level={6}>{data.title}</Heading>}
          </div>
          <div className="grid md:grid-cols-10 grid-cols-5 md:gap-x-10 gap-x-5 col-span-full md:ml-5">
            {data.socialCTAItems &&
              data.socialCTAItems.map((socialCTA, index) => (
                <div
                  key={`social_cta_${index}`}
                  className="col-span-full md:col-span-5 lg:col-span-4 xl:col-span-3 mt-5 md:mt-11"
                >
                  <SocialCTA
                    type={socialCTA.type}
                    title={socialCTA.title}
                    text={socialCTA.introText}
                    linkTo={socialCTA.link.url}
                    buttonText={socialCTA.link.name}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
