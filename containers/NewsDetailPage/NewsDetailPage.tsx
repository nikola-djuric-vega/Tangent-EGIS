import React from 'react'
import { NewsDetailPage as NewsDetailPageType } from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import renderComponents from '../../utils/renderComponents'
import TopNav from '../../components/organisms/TopNav/TopNav'
import formatToMomentDate, {
  generateBreadcrumbs,
  generateSocialShares,
  translateShareLabel,
} from '../../utils/helpers'
import Cta from '../../components/contentTypes/Cta/Cta'
import ArticleHeader from '../../components/organisms/ArticleHeader/ArticleHeader'
import LargeVideoImageBanner from '../../components/organisms/LargeVideoImageBanner/LargeVideoImageBanner'
import TextSideItem from '../../components/organisms/TextSideItem/TextSideItem'
import StylisedLink from '../../components/atoms/StylisedLink/StylisedLink'
import ArrowIcon from '../../components/atoms/icons/Arrow/ArrowIcon'
import PeopleList from '../../components/contentTypes/PeopleList/PeopleList'
import RelatedNewsAndInsights from '../../components/contentTypes/RelatedNewsAndInsights/RelatedNewsAndInsights'
import Footer from '../../components/organisms/Footer/Footer'
import Translation from '../../components/organisms/Translation/Translation'
import { useRouter } from 'next/router'

interface NewsDetailPageProps {
  data: NewsDetailPageType
}

export const NewsDetailPage = ({ data }: NewsDetailPageProps) => {
  const { locale } = useRouter()
  const contactButton =
    data.contactLink?.name && data.contactLink?.url ? (
      <StylisedLink
        type="primary"
        linkText={data.contactLink?.name}
        linkTo={data.contactLink?.url}
        backgroundColour="bg-super-lime"
        hoverColour="bg-midnight-blue"
        textColour="text-midnight-blue"
        textHoverColour="group-hover:text-super-lime"
        icon={<ArrowIcon rightArrow width={17} height={20} />}
      />
    ) : undefined
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
          breadcrumbs={generateBreadcrumbs(
            data.ancestors.items,
            data.pageTitle!
          )}
          title={data.pageTitle!}
          date={formatToMomentDate(data.publishedDate)}
          time={data.minutesRead}
        />
      </div>

      <section className="border-b border-gray-light">
        <div className="container">
          <LargeVideoImageBanner
            videoUrl={data.videoSrc}
            imageAltText={data.image?.umbracoAlternateText!}
            image={data.image?.umbracoFile?.large_banner_url}
            blurImageUrl={data.image?.blur_url}
            shareText={translateShareLabel(locale)}
            socialLinks={generateSocialShares(data.socialPlatforms)}
          />
        </div>
      </section>

      <TextSideItem text={data.richText} sideItem={contactButton} />

      {data.peopleList && <PeopleList {...data.peopleList[0]} />}

      {renderComponents(data.components)}

      {data.relatedContent && (
        <RelatedNewsAndInsights {...data.relatedContent[0]} />
      )}

      {data.cTAComponent && data.cTAComponent[0] && (
        <Cta {...data.cTAComponent[0]} />
      )}

      {data.footer && <Footer {...data.footer} />}
    </>
  )
}
