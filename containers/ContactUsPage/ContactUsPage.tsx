import React from 'react'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import OfficesAccordion from '../../components/contentTypes/OfficesAccoridon/OfficesAccordion'
import Footer from '../../components/organisms/Footer/Footer'
import MapHeader from '../../components/organisms/MapHeader/MapHeader'
import TopNav from '../../components/organisms/TopNav/TopNav'
import { ContactUsPage as ContactUsPageProp } from '../../types/CMS'

export function ContactUsPage({ data }: { data: ContactUsPageProp }) {
  return (
    <div className="flex flex-col min-h-screen">
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
          <MapHeader
            headline={data.headline}
            breadcrumb={[{ text: data.pageTitle }]}
            pageTitle={data.pageTitle}
            contactNumber={data.contactNumber}
            address={data.address}
            getInTouchLink={data.getInTouchLink}
          />
        </div>
      </div>

      <div className="flex-1">
        {!!data?.office?.[0]?.continents && !!data?.office?.[0]?.title && (
          <OfficesAccordion
            title={data.office[0].title}
            continents={data.office[0].continents}
          />
        )}
      </div>
      {data.footer && <Footer {...data.footer} />}
    </div>
  )
}
