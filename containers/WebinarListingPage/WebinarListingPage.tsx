import React, { useEffect, useState } from 'react'
import { WebinarListingPage as WebinarListingType } from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import renderComponents from '../../utils/renderComponents'
import TopNav from '../../components/organisms/TopNav/TopNav'
import Footer from '../../components/organisms/Footer/Footer'
import Pagination from '../../components/organisms/Pagination/Pagination'
import TagLine from '../../components/atoms/TagLine/TagLine'
import Card from '../../components/molecules/Card/Card'
import clsx from 'clsx'
import BasicHeader from '../../components/organisms/BasicHeader/BasicHeader'
import Spinner from '../../components/atoms/Spinner/Spinner'
import Cta from '../../components/contentTypes/Cta/Cta'
import { useRouter } from 'next/router'

interface WebinarListingProps {
  data: WebinarListingType
}

export const WebinarListingPage = ({ data }: WebinarListingProps) => {
  const router = useRouter()
  const [listingItems, setListingItems] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleData = (data: any) => {
    const items: JSX.Element[] = []
    data?.map((item: any, index: number) => {
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
                    time={item.duration}
                    additionalInfo={item.webinarLabel}
                  />
                }
              />
            </div>
          </div>
        </div>
      )
    })
    setListingItems(items)
    setIsLoading(false)
  }

  useEffect(() => {
    handleData(data?.webinars)
  }, [router.locale, data])

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

      <div className="container">
        <BasicHeader
          gridLines={[
            {
              desktopStartColumn: 1,
              align: 'right',
              alignMobile: 'right',
            },
            {
              desktopStartColumn: 4,
              align: 'middle',
              alignMobile: 'right',
            },
            {
              desktopStartColumn: 7,
              align: 'middle',
              alignMobile: 'right',
            },
          ]}
          endGridLine
          breadcrumbs={[{ text: data.pageTitle }]}
          title={data.pageTitle}
          level={2}
        />
      </div>

      <div className="flex-1">
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <Spinner width={150} height={150} />
          </div>
        ) : (
          <>
            {listingItems.length > 0 && (
              <Pagination
                items={listingItems}
                itemsPerPage={12}
                threeColumnLayout
              />
            )}
          </>
        )}
      </div>

      {renderComponents(data.components)}

      {data.cTA && data.cTA[0] && <Cta {...data.cTA[0]} />}

      {data.footer && <Footer {...data.footer} />}
    </div>
  )
}
