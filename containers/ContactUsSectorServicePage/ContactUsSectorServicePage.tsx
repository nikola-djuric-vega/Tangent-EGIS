import React, { useState } from 'react'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import GridLines, { Grid } from '../../components/atoms/GridLines/GridLines'
import Heading from '../../components/atoms/Heading/Heading'
import DynamicForm from '../../components/organisms/DynamicForm/DynamicForm'
import Footer from '../../components/organisms/Footer/Footer'
import TopNav from '../../components/organisms/TopNav/TopNav'
import { ContactUsSectorServicePage as ContactUsSectorServicePageType } from '../../types/CMS'
import Breadcrumb from '../../components/atoms/Breadcrumb/Breadcrumb'
import Spinner from '../../components/atoms/Spinner/Spinner'

export default function ContactUsSectorServicePage({
  data,
}: {
  data: ContactUsSectorServicePageType
}) {
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
      <GridLines grids={grids} />
      <div className="container py-5">
        <Breadcrumb
          breadcrumbs={[
            { text: data.parent.name, url: data.parent.url },
            { text: data.pageTitle },
          ]}
        />
      </div>

      {!!data.formComponent && !!data.formData && !!data.formData.pages && (
        <div className="flex-1 flex flex-col relative h-full">
          {isLoading ? (
            <div className="flex-1 flex items-center justify-center">
              <Spinner width={150} height={150} />
            </div>
          ) : (
            <div className="border-b border-gray-light flex-1">
              <div className="container relative">
                <div className="grid md:grid-cols-10 grid-cols-5 gap-x-5 md:gap-x-10 md:pt-16 pt-5">
                  <div className="col-start-1 md:col-span-3 col-span-full relative">
                    <Heading level={5} hasBlackDot>
                      {data.formComponent[0].formTitle}
                    </Heading>
                    <span className="body4 mt-1">
                      {data.formComponent[0].formText}
                    </span>
                  </div>
                  <div className="md:col-start-6 md:col-span-4 col-start-1 col-span-full my-5 md:my-0">
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

      {data.footer && <Footer {...data.footer} />}
    </div>
  )
}
