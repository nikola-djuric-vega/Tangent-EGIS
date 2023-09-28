import { StandardPage as StandardPageType } from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import TopNav from '../../components/organisms/TopNav/TopNav'
import TopNavMockData from '../../components/organisms/TopNav/TopNav.mockData'
import React from 'react'
import renderComponents from '../../utils/renderComponents'
import { generateBreadcrumbs } from '../../utils/helpers'
import Footer from '../../components/organisms/Footer/Footer'
import BasicHeader from '../../components/organisms/BasicHeader/BasicHeader'

interface StandardPageProps {
  data: StandardPageType
}

export const StandardPage = ({ data }: StandardPageProps) => {
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

      {data.pageTitle && (
        <section className="border-b border-gray-light">
          <div className="container">
            <BasicHeader
              breadcrumbs={generateBreadcrumbs(
                data.ancestors.items,
                data.pageTitle
              )}
              title={data.pageTitle}
              level={3}
              description={data.introductionText}
            />
          </div>
        </section>
      )}

      {renderComponents(data.components)}

      {data.footer && <Footer {...data.footer} />}
    </>
  )
}
