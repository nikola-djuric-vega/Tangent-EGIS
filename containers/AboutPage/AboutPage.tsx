import React from 'react'
import { AboutPage as AboutPageType } from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import renderComponents from '../../utils/renderComponents'
import TopNav from '../../components/organisms/TopNav/TopNav'
import SimpleHeader from '../../components/organisms/SimpleHeader/SimpleHeader'
import NarrowVideoImageBanner from '../../components/organisms/NarrowVideoImageBanner/NarrowVideoImageBanner'
import IntroductionBlock from '../../components/molecules/IntroductionBlock/IntroductionBlock'
import StylisedLink from '../../components/atoms/StylisedLink/StylisedLink'
import ArrowIcon from '../../components/atoms/icons/Arrow/ArrowIcon'
import Footer from '../../components/organisms/Footer/Footer'
import Translation from '../../components/organisms/Translation/Translation'

interface AboutPageProps {
  data: AboutPageType
}

export const AboutPage = ({ data }: AboutPageProps) => {
  return (
    <>
      <CoreMetadata data={data} />

      {data.navigation && (
        <TopNav
          primaryLinks={data.navigation[0]?.primaryLinks}
          secondaryLinks={data.navigation[0]?.secondaryLinks}
          url_en={data?.url_en}
          url_fr={data?.url_fr}
          url_es={data?.url_es}
          url_pt={data?.url_pt}
          pageTitle={data?.pageTitle!}
        />
      )}
      <Translation data={data} />

      <div className="container">
        <SimpleHeader
          breadcrumbs={[{ text: data.pageTitle }]}
          title={data.pageTitle}
          level={2}
        />
      </div>

      <div className="border-b border-gray-light">
        <div className="container">
          <NarrowVideoImageBanner
            image={data.image}
            videoUrl={data.videoSrc}
            introBlock={
              <>
                <IntroductionBlock>
                  {data.introText && (
                    <div
                      className="prose"
                      dangerouslySetInnerHTML={{ __html: data.introText }}
                    />
                  )}
                </IntroductionBlock>
                {data.contactLink && (
                  <StylisedLink
                    externalLink={data.contactLink?.target ? true : false}
                    type="secondary"
                    linkText={data.contactLink?.name}
                    linkTo={data.contactLink?.url}
                    backgroundColour="bg-super-lime"
                    hoverColour="bg-midnight-blue"
                    textColour="text-midnight-blue"
                    textHoverColour="group-hover:text-super-lime"
                    icon={<ArrowIcon rightArrow width={17} height={20} />}
                  />
                )}
              </>
            }
          />
        </div>
      </div>

      {data.components && renderComponents(data.components)}

      {data.footer && <Footer {...data.footer} />}
    </>
  )
}
