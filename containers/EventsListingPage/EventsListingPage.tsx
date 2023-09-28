import axios from 'axios'
import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import Spinner from '../../components/atoms/Spinner/Spinner'
import TagLine from '../../components/atoms/TagLine/TagLine'
import Cta from '../../components/contentTypes/Cta/Cta'
import ThreeColumnLayout from '../../components/molecules/ThreeColumnLayout/ThreeColumnLayout'
import BasicHeader from '../../components/organisms/BasicHeader/BasicHeader'
import Footer from '../../components/organisms/Footer/Footer'
import TopNav from '../../components/organisms/TopNav/TopNav'
import { EventsListingPage as EventsListingPageProps } from '../../types/CMS'
import formatToMomentDate from '../../utils/helpers'

export default function EventsListingPage({
  data,
}: {
  data: EventsListingPageProps
}) {
  const [eventData, setEventData] = useState([])
  const [webinarData, setWebinarData] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const router = useRouter()
  const locale = router.locale

  useEffect(() => {
    if (eventData.length > 0 || webinarData.length > 0) {
      setIsLoading(false)
    }
  }, [eventData, webinarData])
  async function upcomingEvents() {
    const now = moment(new Date())

    try {
      return await axios
        .get(`/api/getEvents?locale=${locale}`)
        .then(({ data }: any) => {
          const events = data
            .map((item: any) => {
              // Umbraco returns the string below when no date is selected - we use this variable to check if field has been populated by the editor
              const endDateValid = item.endDate !== '0001-01-01T00:00:00Z'

              return {
                ...item,
                tagLine: (
                  <TagLine
                    date={`${
                      endDateValid
                        ? formatToMomentDate(item.startDate!) +
                          ' - ' +
                          formatToMomentDate(item.endDate!)
                        : formatToMomentDate(item.startDate!)
                    }`}
                    additionalInfo={item.eventLabel}
                  />
                ),
                linkTo: item.url,
                image: item.image,
                subTitle: item.pageTitle,
                description: item.introductionText,
              }
            })
            .filter((item: any) => {
              const endDateValid = item.endDate !== '0001-01-01T00:00:00Z'
              const end = moment(endDateValid ? item.endDate : item.startDate)
              const duration = moment.duration(end.diff(now))
              const days = Math.round(duration.asDays())

              if (days >= 0) {
                return item
              }
            })

          setEventData(events)
        })
    } catch (e) {
      console.log(e)
    }
  }

  async function loadWebinars() {
    try {
      return await axios
        .get(`/api/getWebinars?locale=${locale}`)
        .then(({ data }: any) => {
          const translateWebinars = data
            .reverse()
            .slice(0, 3)
            .map((item: any) => {
              const endDateValid = item.endDate !== '0001-01-01T00:00:00Z'

              return {
                ...item,
                tagLine: (
                  <TagLine
                    date={`${
                      endDateValid
                        ? formatToMomentDate(item.startDate!) +
                          ' - ' +
                          formatToMomentDate(item.endDate!)
                        : formatToMomentDate(item.startDate!)
                    }`}
                    additionalInfo={item.webinarLabel}
                  />
                ),
                linkTo: item.url,
                image: item.image,
                subTitle: item.pageTitle,
              }
            })
          setWebinarData(translateWebinars)
        })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    upcomingEvents()
    loadWebinars()
  }, [locale])

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
          <BasicHeader
            breadcrumbs={[{ text: data.pageTitle }]}
            title={data.pageTitle}
            level={3}
          />
        </div>
      </div>
      <div className="flex-1">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner width={200} height={200} />
          </div>
        ) : (
          <>
            {!!eventData.length && (
              <div className="border-b border-gray-light">
                <div className="container">
                  <ThreeColumnLayout
                    featured
                    mobileView="stacked"
                    title={data.upcomingEventsTitle}
                    itemType="cardItem"
                    informationArray={eventData}
                  />
                </div>
              </div>
            )}

            {data.cTAComponent && <Cta {...data.cTAComponent[0]} />}

            {!!webinarData.length && (
              <div className="border-b border-gray-light">
                <div className="container">
                  <ThreeColumnLayout
                    mobileView="stacked"
                    title={data.webinarsTitle}
                    itemType="cardItem"
                    informationArray={webinarData}
                    linkText={data.viewAll?.name}
                    linkTo={data.viewAll?.url}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {data.footer && <Footer {...data.footer} />}
    </div>
  )
}
