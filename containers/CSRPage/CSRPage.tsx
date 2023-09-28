import React from 'react'
import { CSRPage as CSRPageProps } from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import renderComponents from '../../utils/renderComponents'
import TopNav from '../../components/organisms/TopNav/TopNav' //temp
import TopNavMockData from '../../components/organisms/TopNav/TopNav.mockData'
import NarrowVideoImageBanner from '../../components/organisms/NarrowVideoImageBanner/NarrowVideoImageBanner'
import SimpleHeader from '../../components/organisms/SimpleHeader/SimpleHeader'
import Footer from '../../components/organisms/Footer/Footer'

export const CSRPage = ({ data }: { data: CSRPageProps }) => {
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
          breadcrumbs={[{ text: data.pageTitle }]}
          title={data.pageTitle}
          level={2}
        />
      </div>

      <section className="border-b border-gray-light">
        <div className="container">
          <NarrowVideoImageBanner
            link={data.formPagePicker}
            image={data.image}
            videoUrl={data.videoSrc}
            introBlock={
              data.introText && (
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: data.introText }}
                />
              )
            }
          />
        </div>
      </section>

      {renderComponents(data.components)}
      {data.footer && <Footer {...data.footer} />}
    </>
  )
}
