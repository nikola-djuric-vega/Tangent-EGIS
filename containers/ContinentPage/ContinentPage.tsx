import React from 'react'
import {
  ContinentPage as ContinentPageType,
  CountryPage,
} from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import renderComponents from '../../utils/renderComponents'
import TopNav from '../../components/organisms/TopNav/TopNav'
import ButtonList from '../../components/organisms/ButtonList/ButtonList'
import LargeVideoImageBanner from '../../components/organisms/LargeVideoImageBanner/LargeVideoImageBanner'
import SimpleHeader from '../../components/organisms/SimpleHeader/SimpleHeader'
import RelatedProjects from '../../components/contentTypes/RelatedProjects/RelatedProjects'
import RelatedNewsAndInsights from '../../components/contentTypes/RelatedNewsAndInsights/RelatedNewsAndInsights'
import Footer from '../../components/organisms/Footer/Footer'
import { generateBreadcrumbs } from '../../utils/helpers'
import Translation from '../../components/organisms/Translation/Translation'

import { FormattedMessage } from 'react-intl'

interface ContinentPageProps {
  data: ContinentPageType
}

export const ContinentPage = ({ data }: ContinentPageProps) => {
  let socialLinks: { label: string; to: string }[] = []
  data.socialNetworks &&
    data.socialNetworks?.map(({ socialPlatform, uRL }) => {
      socialLinks.push({
        label: socialPlatform.toLowerCase(),
        to: uRL,
      })
    })

  function handleDescendants(list: any) {
    return (
      !!list.length &&
      list.filter(
        (country: { __typename: string }) =>
          country.__typename === 'CountryPage'
      )
    )
  }

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
          breadcrumbs={generateBreadcrumbs(
            data.ancestors.items,
            data.pageTitle!
          )}
          title={data.pageTitle}
          description={data.introText}
          level={2}
          endGridLine
        />
      </div>

      <section className="border-b border-gray-light">
        <div className="container">
          <LargeVideoImageBanner
            imageAltText={data.image?.umbracoAlternateText!}
            image={data.image?.umbracoFile?.large_banner_url}
            blurImageUrl={data.image?.blur_url}
            shareText={
              (
                <FormattedMessage
                  description="Phrase for follow region feed"
                  defaultMessage="FOLLOW REGION FEED"
                />
              ) as any
            }
            socialLinks={socialLinks}
          />
        </div>
      </section>

      {data.descendants?.items && (
        <ButtonList
          heading={data?.secondaryNavigationTitle || ''}
          countries={handleDescendants(data.descendants.items)}
        />
      )}
      {data.components && renderComponents(data.components)}
      {data.relatedContent1 && <RelatedProjects {...data.relatedContent1[0]} />}
      {data.relatedContent2 && (
        <RelatedNewsAndInsights {...data.relatedContent2[0]} />
      )}
      {data.footer && <Footer {...data.footer} />}
    </>
  )
}
