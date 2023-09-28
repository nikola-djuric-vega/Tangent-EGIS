import React from 'react'
import { CountryPage as CountryPageType } from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import renderComponents from '../../utils/renderComponents'
import TopNav from '../../components/organisms/TopNav/TopNav'
import SimpleHeader from '../../components/organisms/SimpleHeader/SimpleHeader'
import NarrowVideoImageBanner from '../../components/organisms/NarrowVideoImageBanner/NarrowVideoImageBanner'
import IntroductionBlock from '../../components/molecules/IntroductionBlock/IntroductionBlock'
import RelatedProjects from '../../components/contentTypes/RelatedProjects/RelatedProjects'
import RelatedNewsAndInsights from '../../components/contentTypes/RelatedNewsAndInsights/RelatedNewsAndInsights'
import Translation from '../../components/organisms/Translation/Translation'
import Footer from '../../components/organisms/Footer/Footer'
import { generateBreadcrumbs } from '../../utils/helpers'

interface CountryPageProps {
  data: CountryPageType
}

export const CountryPage = ({ data }: CountryPageProps) => {
  let socialLinks: { label: string; to: string }[] = []
  data.socialNetworks?.map(({ socialPlatform, uRL }) => {
    socialLinks.push({
      label: socialPlatform.toLowerCase(),
      to: uRL,
    })
  })

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
          grids={[
            {
              desktopStartColumn: 6,
              mobileStartColumn: 3,
              align: 'right',
              alignMobile: 'middle',
            },
          ]}
          breadcrumbs={generateBreadcrumbs(
            data.ancestors.items,
            data.pageTitle!
          )}
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
              <IntroductionBlock>
                {data.introText && (
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{ __html: data.introText }}
                  />
                )}
              </IntroductionBlock>
            }
            shareText={data.socialFollowTitle}
            socialLinks={socialLinks}
          />
        </div>
      </div>

      {renderComponents(data.components)}

      {data.relatedProjects && <RelatedProjects {...data.relatedProjects[0]} />}
      {data.relatedNewsInsights && (
        <RelatedNewsAndInsights {...data.relatedNewsInsights[0]} />
      )}

      {data.footer && <Footer {...data.footer} />}
    </>
  )
}
