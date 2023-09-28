import React from 'react'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import Heading from '../../atoms/Heading/Heading'
import OfficeItem from '../../atoms/OfficeItem/OfficeItem'
import clsx from 'clsx'
import { FormattedMessage } from 'react-intl'

interface Offices {
  regionOffices: Office[]
  title: string
}

interface Office {
  address: string[]
  url: string
  officeName: string
}

export default function OfficeListLayout({
  officesData,
  title,
  showGridLine,
}: {
  title?: string
  officesData: Offices
  showGridLine?: boolean
}) {
  const grids: Grid[] = [
    {
      desktopStartColumn: 2,
      mobileStartColumn: 1,
      align: 'middle',
      alignMobile: 'right',
    },
  ]

  return (
    <div className="relative h-full">
      {showGridLine && <GridLines grids={grids} />}
      <div className="grid gap-5 grid-cols-5 lg:grid-cols-10 col-span-full lg:gap-10 relative">
        {title && (
          <div className="col-start-1 col-span-1">
            <Heading level={6}>{title}</Heading>
          </div>
        )}

        <div
          className={clsx(
            showGridLine
              ? 'block py-10 md:py-20 col-span-full md:col-span-1'
              : 'hidden'
          )}
        >
          <Heading level={6}>{'Offices'}</Heading>
        </div>

        <div className="col-start-1 grid md:grid-cols-9 gap-10 col-span-full mx-5 md:mx-0 ">
          {officesData?.regionOffices?.map((office: Office, idx: number) => (
            <div
              key={idx}
              className={clsx(
                'relative group col-span-full sm:col-span-4 xl:col-span-3'
              )}
            >
              <div className="hidden sm:block absolute inset-0 -left-3 h-full w-1 group-hover:bg-super-lime" />
              <div
                className={clsx('relative inline-flex h-full', {
                  'cursor-pointer': !!office.url,
                })}
              >
                <OfficeItem
                  office={{
                    linkText: (
                      <FormattedMessage
                        description="Phrase for get in touch"
                        defaultMessage="Get in touch"
                      />
                    ),
                    address: office.address,
                    url: office.url,
                    city: office.officeName,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
