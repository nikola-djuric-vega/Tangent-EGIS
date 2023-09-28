import React, { useState } from 'react'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import Heading from '../../components/atoms/Heading/Heading'
import Spinner from '../../components/atoms/Spinner/Spinner'
import BasicHeader from '../../components/organisms/BasicHeader/BasicHeader'
import DynamicForm from '../../components/organisms/DynamicForm/DynamicForm'
import Footer from '../../components/organisms/Footer/Footer'
import TopNav from '../../components/organisms/TopNav/TopNav'
import { NewsletterSubscriptionPage } from '../../types/CMS'

export default function NewsletterSubscription({
  data,
}: {
  data: NewsletterSubscriptionPage
}) {
  const [isLoading, setIsLoading] = useState(false)
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

      <div className="flex-1 flex flex-col">
        <div className="border-b border-gray-light">
          <div className="container">
            <BasicHeader
              breadcrumbs={[{ text: data.pageTitle! }]}
              title={data.pageTitle}
              level={3}
              endGridLine
            />
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner width={150} height={150} />
          </div>
        ) : (
          <div className="border-b border-gray-light">
            <div className="container">
              <div className="grid md:grid-cols-10 grd-cols-5 gap-x-5 md:gap-x-10">
                <div className="col-start-1 col-span-12 md:col-start-1 md:col-span-5 lg:col-start-1 lg:col-span-2 pt-7 md:py-14">
                  <Heading level={6} className="mb-2">
                    {data.subscriptionTitle}
                  </Heading>
                  <span className="body4">{data.requiredFieldsText}</span>
                </div>
                {data.newsletterForm !== null && (
                  <div className="col-start-1 col-span-12 md:col-start-6 md:col-span-12 lg:col-start-4 lg:col-span-3 pt-6 md:py-14">
                    <DynamicForm
                      linkTo={data.thankYouPageLink}
                      {...data.newsletterForm}
                      emailTo={data.emailTo!}
                      pageName={data.pageTitle!}
                      setIsLoading={setIsLoading}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {data.footer && <Footer {...data.footer} />}
    </div>
  )
}
