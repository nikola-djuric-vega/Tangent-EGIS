import React from 'react'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import GenericLandingComponent from '../../molecules/GenericLandingComponent/GenericLandingComponent'
import { TextCarouselItemProps } from '../../molecules/TextCarouselItem/TextCarouselItem'
import moment from 'moment'
import clsx from 'clsx'
import { Media } from '../../../types/CMS'
import { formatBytes } from '../../../utils/formatBytes'

interface DownloadItem {
  date: string
  file: { name: string; url: string; umbracoBytes: string }
  image: { blur_url: string; url: string; umbracoAlternateText: string }
  introTe: string
  link?: { name: string; url: string }
  title: string
  linkType: 'external' | 'internal'
}

const DownloadItems = (data: any) => {
  const gridLines: Grid[] = [
    {
      desktopStartColumn: 1,
      mobileStartColumn: 1,
      align: 'right',
      alignMobile: 'right',
    },
  ]

  return (
    <section className="border-b border-gray-light">
      <div className="container relative py-5">
        <GridLines
          grids={gridLines}
          colour="bg-gray-light"
          endLineDesktop={true}
        />
        {data.downloadItems?.map(
          (downloadItem: DownloadItem, index: number) => {
            const formattedDate = downloadItem.date
              ? moment(new Date(downloadItem.date)).format('MMM YYYY')
              : undefined
            return (
              <div
                className={clsx('py-5 mx-5', {
                  'border-b border-gray-light':
                    index < data.downloadItems.length - 1,
                })}
                key={'dlItem' + index}
              >
                <GenericLandingComponent
                  linkTo={
                    downloadItem.file
                      ? downloadItem.file.url
                      : downloadItem.link
                      ? downloadItem.link.url
                      : ''
                  }
                  image={downloadItem.image}
                  title={downloadItem.title}
                  content={downloadItem.introTe}
                  buttonType={downloadItem.file && 'download'}
                  firstTag={formattedDate}
                  secondTag={
                    downloadItem.file?.umbracoBytes &&
                    formatBytes(+downloadItem.file.umbracoBytes)
                  }
                  linkType={downloadItem.linkType}
                />
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}

export default DownloadItems
