import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  InsightPage,
  InsightsListingPage as InsightsListingPageType,
} from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import TopNav from '../../components/organisms/TopNav/TopNav'
import BasicHeader from '../../components/organisms/BasicHeader/BasicHeader'
import FilterButtonList from '../../components/organisms/FilterButtonList/FilterButtonList'
import TagLine from '../../components/atoms/TagLine/TagLine'
import ThreeColumnLayout from '../../components/molecules/ThreeColumnLayout/ThreeColumnLayout'
import { useRouter } from 'next/router'
import Footer from '../../components/organisms/Footer/Footer'
import Cta from '../../components/contentTypes/Cta/Cta'
import Pagination from '../../components/organisms/Pagination/Pagination'
import clsx from 'clsx'
import Card from '../../components/molecules/Card/Card'
import Translation from '../../components/organisms/Translation/Translation'
import { generateCardProps } from '../../utils/generateCardProps'

interface InsightsListingPageProps {
  data: InsightsListingPageType
}

export const InsightsListingPage = ({ data }: InsightsListingPageProps) => {
  const [listingItems, setListingItems] = useState<any>([])
  const [tags, setTags] = useState<[]>([])
  const [inlineCTA, setInlineCTA] = useState({})
  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(false)

  const [featuredInsights, setFeaturedInsights] = useState([])
  const [mostPopular, setMostPopular] = useState([])
  const [latestInsights, setLatestInsights] = useState([])
  const { locale } = useRouter()
  const allText =
    locale === 'en'
      ? 'All'
      : locale === 'fr'
      ? 'Tout'
      : locale === 'pt'
      ? 'Tudo'
      : locale === 'es'
      ? 'Todos'
      : ''

  const handleData = (data: []) => {
    let tagsList: any = [{ name: allText }]
    const items: any = []
    data.map((item: InsightPage, index) => {
      let itemTags: any = []
      item.insightTag?.length > 0 &&
        item.insightTag.map((tag) => {
          tagsList.push({ name: tag.name })
          itemTags.push(tag.name)
        })

      if (
        !router.query.filter ||
        router.query.filter.includes(allText) ||
        itemTags.includes(router.query.filter as string)
      )
        items.push(
          <div
            data-testid="variant-test"
            key={index}
            className={clsx(
              'col-span-5 relative lg:col-span-3 md:col-span-4 whitespace-normal first:md:col-span-3 first:md:col-start-1 pb-5 md:pb-8 last:border-none last:pb-0'
            )}
          >
            <div
              className={clsx(
                'col-span-5 relative md:col-span-3 pb-5 md:pb-0',
                index === 0 && 'md:col-span-3 md:col-start-1',
                'border-b border-gray-light md:border-none'
              )}
            >
              <div className="md:ml-5 relative">
                <Card
                  linkTo={item.url}
                  image={item.image}
                  subTitle={item.name}
                  tagline={
                    <TagLine
                      time={item.minutesRead}
                      additionalInfo={item.insightTag[0]?.name}
                    />
                  }
                />
              </div>
            </div>
          </div>
        )
    })
    setListingItems(items)
    const uniqueTags = tagsList.filter(
      (tag: { name: any }, index: any, self: { name: any }[]) =>
        index === self.findIndex((t: { name: any }) => t.name === tag.name)
    )
    setTags(uniqueTags)
  }

  useEffect(() => {
    handleData(data.insights)

    if (typeof router.query.filter === 'undefined') {
      setInitialLoad(true)
    } else {
      setInitialLoad(false)
    }
  }, [router?.query?.filter, router.locale])

  const { insightsListingData } = data

  const insightPage = insightsListingData['allInsightPage'].items
  const insightsListing = insightsListingData['allInsightsListing'].items[0]

  function handleInsightListingPage() {
    if (insightsListing) {
      if (typeof insightsListing.inlineCTAComponent !== undefined) {
        setInlineCTA(
          insightsListing.inlineCTAComponent &&
            insightsListing.inlineCTAComponent[0]
        )
      }

      setFeaturedInsights(
        insightsListing.featuredInsights?.map((insight: any) => {
          return generateCardProps(insight)
        })
      )

      setMostPopular(
        insightsListing.mostPopularInsights?.map((insight: any) => {
          return generateCardProps(insight)
        })
      )
    }
    if (insightPage) {
      setLatestInsights(
        insightPage.map((insight: any) => {
          return generateCardProps(insight)
        })
      )
    }
  }

  useEffect(() => {
    handleInsightListingPage()
  }, [data])

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

      <section className="border-b border-gray-light">
        <div className="container">
          <BasicHeader
            breadcrumbs={[{ text: data.pageTitle }]}
            title={
              router.query.filter && !router.query.filter.includes(allText)
                ? (router.query.filter as string)
                : data.pageTitle
            }
            description={data.introductionText}
            level={3}
          />
        </div>
      </section>

      {tags.length > 0 && (
        <FilterButtonList heading={data.tagsLabel || ''} buttons={tags} />
      )}

      {initialLoad ? (
        <>
          {!!featuredInsights && (
            <div className="container">
              <ThreeColumnLayout
                inlineCTA={inlineCTA && (inlineCTA as any)}
                featured
                title={insightsListing.featuredInsightsTitle}
                itemType="cardItem"
                informationArray={featuredInsights}
              />
            </div>
          )}

          {!!mostPopular && (
            <div className="bg-steel-gray-lightest">
              <div className="container">
                <ThreeColumnLayout
                  mobileView="scroll"
                  featured
                  title={insightsListing.mostPopularTitle}
                  itemType="cardItem"
                  informationArray={mostPopular}
                />
              </div>
            </div>
          )}

          {!!latestInsights && (
            <div className="border-b border-gray-light">
              <div className="container">
                <ThreeColumnLayout
                  mobileView="scroll"
                  title={insightsListing.latestInsightsTitle}
                  itemType="cardItem"
                  informationArray={latestInsights}
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {listingItems.length > 0 && (
            <Pagination
              items={listingItems}
              itemsPerPage={15}
              threeColumnLayout
            />
          )}
        </>
      )}

      {data.cTAComponent && data.cTAComponent[0] && (
        <Cta {...data.cTAComponent[0]} />
      )}

      {data.footer && <Footer {...data.footer} />}
    </>
  )
}
