import React from 'react'
import ArticleItem from '../../molecules/ArticleItem/ArticleItem'

interface TextProps {
  sideItem?: React.ReactNode
  text?: string
}

const TextSideItem = ({ sideItem, text }: TextProps) => {
  return (
    <section role="contentinfo" className="border-b border-gray-light">
      <div className="container">
        <ArticleItem sideItem={sideItem}>
          {text && (
            <article
              className="prose"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
        </ArticleItem>
      </div>
    </section>
  )
}

export default TextSideItem
