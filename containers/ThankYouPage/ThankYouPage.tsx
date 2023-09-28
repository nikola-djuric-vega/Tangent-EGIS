import React from 'react'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import RelatedNewsAndInsights from '../../components/contentTypes/RelatedNewsAndInsights/RelatedNewsAndInsights'
import BasicHeader from '../../components/organisms/BasicHeader/BasicHeader'
import Footer from '../../components/organisms/Footer/Footer'
import TopNav from '../../components/organisms/TopNav/TopNav'
import { ThankYouPage as ThankYouPageType } from '../../types/CMS'

export const ThankYouPage = ({ data }: { data: ThankYouPageType }) => {
  return (
    <div className="flex flex-col h-screen">
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

      <div className="flex-1">
        <div className="border-b border-gray-light">
          <div className="container">
            <BasicHeader
              descriptionClass="body2"
              breadcrumbs={[{ text: 'thank you' }]}
              level={3}
              title={data.pageTitle}
              description={data.introductionText}
            />
          </div>
        </div>

        {data.relatedContent && (
          <RelatedNewsAndInsights {...data.relatedContent[0]} />
        )}
      </div>

      {data.footer && <Footer {...data.footer} />}
    </div>
  )
}
