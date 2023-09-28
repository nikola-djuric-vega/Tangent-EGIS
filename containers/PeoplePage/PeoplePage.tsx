import { useRouter } from 'next/router'
import React from 'react'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import IntroductionBlock from '../../components/molecules/IntroductionBlock/IntroductionBlock'
import Footer from '../../components/organisms/Footer/Footer'
import NarrowVideoImageBanner from '../../components/organisms/NarrowVideoImageBanner/NarrowVideoImageBanner'
import SimpleHeader from '../../components/organisms/SimpleHeader/SimpleHeader'
import TopNav from '../../components/organisms/TopNav/TopNav'
import { PeoplePage as PeoplePageType } from '../../types/CMS'
import { generateSocialShares, translateShareLabel } from '../../utils/helpers'
import renderComponents from '../../utils/renderComponents'

export const PeoplePage = ({ data }: { data: PeoplePageType }) => {
  const breadcrumbs = [
    { url: data.parent?.url, text: data.parent?.name },
    { text: data.pageTitle! },
  ]

  const { locale } = useRouter()
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

      <div className="container">
        <SimpleHeader
          breadcrumbs={breadcrumbs}
          title={data.pageTitle}
          level={2}
        />
      </div>

      <div className="border-b border-gray-light">
        <div className="container">
          <NarrowVideoImageBanner
            title={data.joinedInText}
            subTitle={data.fullName}
            location={data.locationText}
            role={data.roleText}
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
            shareText={translateShareLabel(locale, 'profile')}
            socialLinks={generateSocialShares(data.socialShare)}
          />
        </div>
      </div>

      {renderComponents(data.components)}

      {data.footer && <Footer {...data.footer} />}
    </>
  )
}
