import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PaginationNavigation from '../../molecules/PaginationNavigation/PaginationNavigation'
import clsx from 'clsx'
import { ConditionalWrapper } from '../../../utils/helpers'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'

interface PaginationProps {
  heading?: React.ReactNode
  items: any
  itemsPerPage: number
  threeColumnLayout?: boolean
  edges?: boolean
  projectPagination?: boolean
}

const Pagination = ({
  heading,
  items,
  itemsPerPage,
  threeColumnLayout,
  edges,
  projectPagination,
}: PaginationProps) => {
  const router = useRouter()
  const numbPages = Math.ceil(
    items.length / (projectPagination ? 15 : itemsPerPage)
  )

  const paginate = (array: any[], pageNumber: number) => {
    return array.slice(
      (pageNumber - 1) * itemsPerPage,
      pageNumber * itemsPerPage
    )
  }

  const [itemsToShow, setItemsToShow] = useState<any>([])

  useEffect(() => {
    const pageNumber = router?.query.page
      ? parseInt(router?.query.page as string)
      : 1
    setItemsToShow(paginate(items, pageNumber))
  }, [items])

  useEffect(() => {
    if (router?.query.page && process.env.NODE_ENV !== 'test') {
      setItemsToShow(paginate(items, parseInt(router?.query.page as string)))
    }
  }, [router?.query.page])

  const edgesGrid: Grid[] = [
    {
      align: 'right',
      desktopStartColumn: 1,
      alignMobile: 'right',
    },
  ]

  const threeColumnGrid: Grid[] = [
    {
      align: 'right',
      desktopStartColumn: 1,
      alignMobile: 'right',
    },
    {
      align: 'middle',
      alignMobile: 'right',
      desktopStartColumn: 4,
    },
    {
      align: 'middle',
      alignMobile: 'right',
      desktopStartColumn: 7,
    },
  ]

  return (
    <section className="border-b border-gray-light">
      {heading && heading}
      <div
        className={clsx(
          'md:container relative border-gray-light',
          !threeColumnLayout && items.length > itemsPerPage && 'border-b'
        )}
      >
        <ConditionalWrapper
          condition={edges}
          wrapper={(children: any) => (
            <div className="relative">
              <GridLines grids={edgesGrid} endLineDesktop />
              <div className="grid grid-cols-5 gap-x-5 md:grid-cols-10 md:gap-10 relative">
                {children}
              </div>
            </div>
          )}
        >
          <ConditionalWrapper
            condition={threeColumnLayout}
            wrapper={(children: any) => (
              <div className="relative">
                <GridLines grids={threeColumnGrid} endLineDesktop />
                <div className="grid grid-cols-5 gap-x-5 md:grid-cols-10 md:gap-10 relative md:pt-11 md:pb-10">
                  {children}
                </div>
              </div>
            )}
          >
            {itemsToShow.length > 0 &&
              itemsToShow.map((item: React.ReactNode, index: number) => {
                return (
                  <React.Fragment key={`item_${index}`}>{item}</React.Fragment>
                )
              })}
          </ConditionalWrapper>
        </ConditionalWrapper>
      </div>

      {items.length > itemsPerPage && (
        <div
          className={clsx(threeColumnLayout && 'border-t border-gray-light')}
        >
          <ConditionalWrapper
            condition={edges}
            wrapper={(children: any) => (
              <div className="container relative">
                <GridLines grids={edgesGrid} endLineDesktop />
                <div className="grid grid-cols-5 gap-5 md:grid-cols-10 md:gap-10 relative">
                  <div className="col-span-full">{children}</div>
                </div>
              </div>
            )}
          >
            <div className="container">
              <PaginationNavigation
                pageCount={numbPages}
                initialPage={router?.query.page as string}
              />
            </div>
          </ConditionalWrapper>
        </div>
      )}
    </section>
  )
}

export default Pagination
