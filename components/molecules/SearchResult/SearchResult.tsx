import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Media } from '../../../types/CMS'
import {
  ConditionalWrapper,
  transformUrl,
  truncateString,
} from '../../../utils/helpers'
import clsx from 'clsx'

interface SearchResultProps {
  linkTo: string
  image?: string
  title?: string
  content?: string
  tag?: string
  featured?: boolean
  searchTerm?: string
}

const SearchResult = ({
  linkTo,
  image,
  title,
  content,
  tag,
  featured,
  searchTerm,
}: SearchResultProps) => {
  const placeholderImage = require('../../../public/images/placeholder.png')

  const highlightTitle = (title: string) => {
    if (searchTerm) {
      const isMatch = title.toLowerCase().includes(searchTerm!.toLowerCase())
      if (isMatch) {
        const arrayOfWords = title.split(' ')

        arrayOfWords.forEach((word, index) => {
          const lowerWord = word.toLowerCase()
          const lowerSearchTerm = searchTerm.toLowerCase()
          const wordMatch = lowerWord === lowerSearchTerm
          if (wordMatch) {
            arrayOfWords[
              index
            ] = `<span class="highlight">${arrayOfWords[index]}</span>`
          }
        })

        return arrayOfWords.join(' ')
      }
    }

    return title
  }

  return (
    <div className="col-span-full border-b border-gray-light">
      <ConditionalWrapper
        condition={!!linkTo}
        wrapper={(children: any) => (
          <Link href={transformUrl(linkTo)}>
            <a>{children}</a>
          </Link>
        )}
      >
        <div
          className={clsx(
            'md:flex md:flex-row',
            featured ? 'pt-5 pb-5 md:pt-10 md:pb-12' : 'md:pt-10 md:pb-10'
          )}
        >
          {featured && (
            <div className={clsx('w-full md:w-72')}>
              <Image
                layout="responsive"
                src={image ? image : placeholderImage}
                alt="item"
                width="344"
                height="255"
                objectFit="cover"
              />
            </div>
          )}
          <div
            className={clsx(
              'flex flex-col flex-1 justify-center py-6 md:py-0',
              featured && 'md:ml-10'
            )}
          >
            {tag && <span className="tag mb-1">{tag}</span>}
            {title && (
              <p
                className="body1"
                dangerouslySetInnerHTML={{ __html: highlightTitle(title) }}
              />
            )}
            {content && (
              <p className="body3 mt-2">{truncateString(content, 300)}</p>
            )}
          </div>
        </div>
      </ConditionalWrapper>
    </div>
  )
}

export default SearchResult
