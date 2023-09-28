import React, { useState } from 'react'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import GridLines, { Grid } from '../../components/atoms/GridLines/GridLines'
import Heading from '../../components/atoms/Heading/Heading'
import DynamicForm from '../../components/organisms/DynamicForm/DynamicForm'
import GenericLandingComponent from '../../components/contentTypes/GenericLandingComponent/GenericLandingComponent'
import Footer from '../../components/organisms/Footer/Footer'
import MapHeader from '../../components/organisms/MapHeader/MapHeader'
import TopNav from '../../components/organisms/TopNav/TopNav'
import { OfficePage as OfficePageType } from '../../types/CMS'
import { generateBreadcrumbs } from '../../utils/helpers'
import Spinner from '../../components/atoms/Spinner/Spinner'
import Translation from '../../components/organisms/Translation/Translation'

export default function OfficePage({ data }: { data: OfficePageType }) {
  const [isLoading, setIsLoading] = useState(false)
  const grids: Grid[] = [
    {
      desktopStartColumn: 5,
      mobileStartColumn: 3,
      alignMobile: 'left',
      align: 'middle',
    },
  ]
  return (
    <div className="flex min-h-screen flex-col">
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

      <div className="flex-1 flex flex-col">
        {data.pageTitle && (
          <div className="border-b border-gray-light">
            <section className="container">
              <MapHeader
                breadcrumb={generateBreadcrumbs(
                  data.ancestors.items,
                  data.pageTitle
                )}
                pageTitle={data.pageTitle}
                headline={data.officeName}
                address={data.address}
                contactNumber={data.contactNumber}
                latitude={data.latitude}
                longitude={data.longitude}
              />
            </section>
          </div>
        )}

        {!!data.formComponent && !!data.formData && !!data.formData.pages && (
          <div className="flex-1 flex flex-col relative h-full">
            {isLoading ? (
              <div className="flex-1 flex items-center justify-center">
                <Spinner width={150} height={150} />
              </div>
            ) : (
              <div className="border-b border-gray-light">
                <div className="container relative">
                  <GridLines grids={grids} />
                  <div className="grid md:grid-cols-10 grid-cols-5 gap-x-5 md:gap-x-10 pt-10 md:pt-16">
                    <div className="col-start-1 col-span-full md:col-span-4 relative pb-5 md:pb-0">
                      <Heading level={5} hasBlackDot>
                        {data.formComponent[0].formTitle}
                      </Heading>
                      <span className="body4 mt-1">
                        {data.formComponent[0].formText}
                      </span>
                    </div>
                    <div className="col-start-1 md:col-start-6 col-span-4">
                      <DynamicForm
                        linkTo={data.formComponent[0]?.thankYouPageLink}
                        {...data.formData}
                        emailTo={data.formComponent[0].emailTo!}
                        pageName={data.pageTitle!}
                        setIsLoading={setIsLoading}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {data.publicationComponent && (
          <div className="my-5 md:my-10">
            <GenericLandingComponent {...data.publicationComponent[0]} />
          </div>
        )}
      </div>

      {data.footer && <Footer {...data.footer} />}
    </div>
  )
}
