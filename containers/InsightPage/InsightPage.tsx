import { InsightPage as InsightPageType } from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import renderComponents from '../../utils/renderComponents'
import TopNav from '../../components/organisms/TopNav/TopNav'
import Cta from '../../components/contentTypes/Cta/Cta'
import LargeVideoImageBanner from '../../components/organisms/LargeVideoImageBanner/LargeVideoImageBanner'
import Tags from '../../components/contentTypes/TagList/TagList'
import formatToMomentDate, {
  generateSocialShares,
  translateShareLabel,
} from '../../utils/helpers'
import ArticleHeader from '../../components/organisms/ArticleHeader/ArticleHeader'
import RelatedNewsAndInsights from '../../components/contentTypes/RelatedNewsAndInsights/RelatedNewsAndInsights'
import React from 'react'
import Footer from '../../components/organisms/Footer/Footer'
import Translation from '../../components/organisms/Translation/Translation'
import { useRouter } from 'next/router'

interface InsightPageProps {
  data: InsightPageType
}

export const InsightPage = ({ data }: InsightPageProps) => {
  const breadcrumbs = [
    { url: data.parent.url, text: data.parent.name },
    { text: data.pageTitle },
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
      <Translation data={data} />

      <div className="container">
        <ArticleHeader
          breadcrumbs={breadcrumbs}
          title={data.pageTitle!}
          date={formatToMomentDate(data.publishedDate)}
          time={data.minutesRead.toString()}
        />
      </div>

      <section className="border-b border-gray-light">
        <div className="container">
          <LargeVideoImageBanner
            imageAltText={data.image?.umbracoAlternateText!}
            image={data.image?.umbracoFile?.large_banner_url}
            blurImageUrl={data.image?.blur_url}
            shareText={translateShareLabel(locale)}
            socialLinks={generateSocialShares(data.socialPlatforms)}
          />
        </div>
      </section>

      {renderComponents(data.components)}

      {!!data.insightTag && <Tags tags={data.insightTag} />}
      {data.relatedNewsInsights && data.relatedNewsInsights[0] && (
        <RelatedNewsAndInsights {...data.relatedNewsInsights[0]} />
      )}

      {data.cTAComponent && data.cTAComponent[0] && (
        <Cta {...data.cTAComponent[0]} />
      )}

      {data.footer && <Footer {...data.footer} />}
    </>
  )
}
