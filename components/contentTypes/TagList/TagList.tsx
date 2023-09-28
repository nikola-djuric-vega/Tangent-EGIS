import React from 'react'
import TagList from '../../molecules/TagList/TagList'
import { Tag } from '../../../types/CMS/insight-page'
import { FormattedMessage } from 'react-intl'

export default function Tags({ tags }: { tags: Tag[] }) {
  return (
    <section className="border-b border-gray-light">
      <div className="md:container">
        <TagList
          tags={tags}
          title={
            (
              <FormattedMessage
                defaultMessage="Insight Tags"
                description="Phrase for insight tags"
              />
            ) as any
          }
          variant="cta"
        />
      </div>
    </section>
  )
}
