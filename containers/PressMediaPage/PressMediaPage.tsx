import React from 'react'
import { PressMediaPage as PressMediaPageType } from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import renderComponents from '../../utils/renderComponents'
import TopNav from '../../components/organisms/TopNav/TopNav'

import BasicHeader from '../../components/organisms/BasicHeader/BasicHeader'
import RelatedNewsAndInsights from '../../components/contentTypes/RelatedNewsAndInsights/RelatedNewsAndInsights'
import Footer from '../../components/organisms/Footer/Footer'

interface PressMediaPageProps {
  data: PressMediaPageType
}

export const PressMediaPage = ({ data }: PressMediaPageProps) => {
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

      <div className="border-b border-gray-light">
        <div className="container">
          <BasicHeader
            breadcrumbs={[{ text: data.pageTitle! }]}
            title={data.pageTitle}
            level={2}
          />
        </div>
      </div>

      {data.news && (
        <RelatedNewsAndInsights
          viewAllLink={{ name: data.link?.name, url: data.link?.url }}
          title={data.latestNewsTitle}
          relatedNewsAndInsights={data.news}
          inlineCTA={data.inlineCTA && data.inlineCTA[0]}
        />
      )}

      {renderComponents(data.components)}

      {data.footer && <Footer {...data.footer} />}
    </>
  )
}
