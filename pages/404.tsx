import { GetStaticPropsContext } from 'next'
import React from 'react'
import Breadcrumb from '../components/atoms/Breadcrumb/Breadcrumb'
import Heading from '../components/atoms/Heading/Heading'
import Footer from '../components/organisms/Footer/Footer'
import TopNav from '../components/organisms/TopNav/TopNav'
import createApolloClient from '../lib/createApolloClient'
import {
  Footer as FooterType,
  Navigation,
  ErrorPage as ErrorPageType,
  CmsPage,
} from '../types/CMS'
import fetchErrorPage from '../utils/fetchErrorPage'
import fetchFooter from '../utils/fetchFooter'
import fetchNavigation from '../utils/fetchNavigation'
import Image from 'next/image'
import GridLines, { Grid } from '../components/atoms/GridLines/GridLines'
import StylisedLink from '../components/atoms/StylisedLink/StylisedLink'
import ArrowIcon from '../components/atoms/icons/Arrow/ArrowIcon'
import CoreMetadata from '../components/atoms/CoreMetadata/CoreMetadata'
import fetchCookie from '../utils/fetchCookie'

export default function Custom404({
  data,
}: {
  data:
    | { footer: FooterType; navigation: Navigation; error: ErrorPageType }
    | any
}) {
  const image = data.error?.image
  const gridLines: Grid[] = [
    {
      desktopStartColumn: 6,
      mobileStartColumn: 3,
      align: 'middle',
      alignMobile: 'left',
    },
  ]

  return (
    <>
      <CoreMetadata data={data} />
      <div className="flex flex-col min-h-screen">
        {data.navigation && (
          <TopNav
            primaryLinks={data.navigation.primaryLinks}
            secondaryLinks={data.navigation.secondaryLinks}
            url_en={'/'}
            url_fr={'/fr/'}
            url_es={'/es/'}
            url_pt={'/pt/'}
            pageTitle={data?.pageTitle!}
          />
        )}
        <div className="pt-5 md:border-t border-gray-light relative flex-grow">
          <div className="container grid md:grid-cols-10 md:gap-x-10 gap-x-5">
            <GridLines endLineMobile grids={gridLines} colour="bg-gray-light" />
            <div className="col-start-1 md:col-span-5">
              <Breadcrumb
                breadcrumbs={[{ url: '/', text: 'ERROR 404 PAGE NOT FOUND' }]}
              />
            </div>
            {data.error && !!data.error.pageTitle && (
              <div className="col-start-1 md:col-start-2 col-span-full md:mt-16 mt-4 flex flex-col">
                <Heading hasGreenFlare level={2}>
                  {data.error.pageTitle}
                </Heading>
              </div>
            )}
            <div className="order-last md:order-none h-full w-full md:col-start-2 col-start-1 md:col-span-4 col-span-full md:mb-0 ml-0 md:-ml-5 relative bg-white">
              {image?.url && image.blur_url && (
                <Image
                  priority
                  src={
                    image.umbracoFile.featured_url
                      ? image.umbracoFile.featured_url
                      : image.url
                  }
                  alt={image.umbracoAlternateText || image.name}
                  blurDataURL={image.blur_url}
                  placeholder="blur"
                  width={480}
                  height={480}
                  objectFit="contain"
                />
              )}
            </div>
            <div className="col-start-1 md:col-start-7 md:items-center col-span-full relative">
              <div className="flex flex-col md:my-0 mt-5">
                <span className="body1 mt-0 md:mt-10 mr-4 ">
                  {data.error && data.error.text ? (
                    <>{data.error.text}</>
                  ) : (
                    <>An unknown error has occurred</>
                  )}
                </span>
                {data.error &&
                  data.error.link &&
                  data.error.link.name &&
                  data.error.link.url && (
                    <div className="mt-10  md:mb-0 ">
                      <StylisedLink
                        type="primary"
                        linkText={data.error.link.name}
                        linkTo={data.error.link.url}
                        backgroundColour="bg-super-lime"
                        hoverColour="bg-midnight-blue"
                        textColour="text-midnight-blue"
                        textHoverColour="group-hover:text-super-lime"
                        icon={<ArrowIcon rightArrow width={17} height={20} />}
                      />
                      <div className="md:hidden border-b w-screen border-gray-light -ml-5 mt-7 md:m-0"></div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>

        {data.footer && <Footer {...data.footer} />}
      </div>
    </>
  )
}

export async function getStaticProps({
  locale,
  preview,
}: GetStaticPropsContext) {
  const apolloClient = createApolloClient()

  let pageData = {}
  let navigation: { mainNav: any }[] = []
  let error = {}
  let footer: any

  let cookie: any

  navigation = await fetchNavigation({ apolloClient, preview, locale })

  error = await fetchErrorPage({ apolloClient, preview, locale })

  footer = await fetchFooter({ apolloClient, preview, locale })

  cookie = await fetchCookie({ apolloClient, preview, locale })

  if (!!navigation[0].mainNav.length) {
    pageData = { ...pageData, navigation: navigation[0].mainNav[0] }
  }

  if (cookie) {
    pageData = { ...pageData, cookie: cookie }
  }

  if (error) {
    pageData = { ...pageData, error: error }
  }

  if (footer) {
    pageData = { ...pageData, footer: footer }
  }

  return {
    props: {
      data: pageData,
      locale,
    },
    // Time in seconds that page revalidation occurs
    revalidate: parseInt(process.env.NEXT_REVALIDATE_DURATION || '60', 10),
    notFound: !pageData,
  }
}
