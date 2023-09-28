import React from 'react'
import { WebinarPage as WebinarPageType } from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import renderComponents from '../../utils/renderComponents'
import TopNav from '../../components/organisms/TopNav/TopNav'
import LargeVideoImageBanner from '../../components/organisms/LargeVideoImageBanner/LargeVideoImageBanner'
import formatToMomentDate, {
  generateSocialShares,
  translateShareLabel,
} from '../../utils/helpers'
import ArticleHeader from '../../components/organisms/ArticleHeader/ArticleHeader'
import Footer from '../../components/organisms/Footer/Footer'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'
interface WebinarPageProps {
  data: WebinarPageType
}

export const WebinarPage = ({ data }: WebinarPageProps) => {
  const { locale } = useRouter()

  // Umbraco returns the string below when no date is selected - we use this variable to check if field has been populated by the editor
  const endDateValid = data.endDate !== '0001-01-01T00:00:00Z'

  const time =
    data.durationFrom &&
    data.durationTo &&
    data.durationFrom + ' - ' + data.durationTo + ' ' + data.timeZone

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

      <section className="border-b border-gray-light">
        <div className="container">
          <ArticleHeader
            breadcrumbs={[
              { text: data.parent?.name, url: data.parent?.url },
              { text: data.pageTitle },
            ]}
            title={data.pageTitle!}
            date={`${
              endDateValid
                ? formatToMomentDate(data.startDate!) +
                  ' - ' +
                  formatToMomentDate(data.endDate!)
                : formatToMomentDate(data.startDate!)
            }`}
            time={time}
            type={data.webinarLabel}
            isWebinar
          />
          <LargeVideoImageBanner
            imageAltText={data.image?.umbracoAlternateText!}
            videoUrl={data.videoSrc}
            image={data.image?.umbracoFile?.large_banner_url}
            blurImageUrl={data.image?.blur_url}
            shareText={translateShareLabel(locale)}
            socialLinks={generateSocialShares(data.socialPlatforms)}
          />
        </div>
      </section>

      {renderComponents(data.components)}

      {data.footer && <Footer {...data.footer} />}
    </>
  )
}
