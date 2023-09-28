import React from 'react'
import { useRouter } from 'next/router'
import ReactPaginate from 'react-paginate'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import useMobile from '../../../utils/useMobile'

interface PaginationNavigationProps {
  pageCount: number
  initialPage?: string
}

const PaginationNavigation = ({
  pageCount,
  initialPage,
}: PaginationNavigationProps) => {
  const router = useRouter()
  const isMobile = useMobile()
  const handleQuery = () => {
    const path = router.asPath.split('?')[0]
    const query = router.query
    delete query.slug

    return { path, query }
  }

  const handlePageChange = (e: { selected: number }) => {
    const { path, query } = handleQuery()
    query.page = (e.selected + 1).toString()

    if (!isNaN(e.selected)) {
      router.push({
        pathname: path,
        query: query,
      })
    }
  }

  return (
    <div className="py-8 flex flex-col">
      <div className="flex-1"></div>
      <div
        className="ml-auto"
        role="navigation"
        aria-label="Pagination navigation"
      >
        <ReactPaginate
          previousLabel={<ArrowIcon width={20} height={12} />}
          nextLabel={<ArrowIcon rightArrow width={20} height={12} />}
          pageClassName="h6 p-2"
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={isMobile ? 1 : 4}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          initialPage={initialPage ? parseInt(initialPage) - 1 : undefined}
          containerClassName="pagination flex items-center space-x-3"
          disabledClassName="opacity-40"
          activeClassName="bg-super-lime rounded-full p-2"
        />
      </div>
    </div>
  )
}

export default PaginationNavigation
