import { SubSectorPage as SubSectorPageType } from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import renderComponents from '../../utils/renderComponents'
import TopNav from '../../components/organisms/TopNav/TopNav'
import SimpleHeader from '../../components/organisms/SimpleHeader/SimpleHeader'
import NarrowVideoImageBanner from '../../components/organisms/NarrowVideoImageBanner/NarrowVideoImageBanner'
import IntroductionBlock from '../../components/molecules/IntroductionBlock/IntroductionBlock'
import React from 'react'
import Footer from '../../components/organisms/Footer/Footer'
import { generateBreadcrumbs } from '../../utils/helpers'

interface SubSectorPageProps {
  data: SubSectorPageType
}

export const SubSectorPage = ({ data }: SubSectorPageProps) => {
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

      <div className="container">
        <SimpleHeader
          breadcrumbs={generateBreadcrumbs(
            data.ancestors.items,
            data.pageTitle
          )}
          title={data.pageTitle}
          level={2}
        />
      </div>

      <div className="container">
        <NarrowVideoImageBanner
          image={data.image}
          videoUrl={data.videoSrc}
          introBlock={
            <IntroductionBlock
              introductionText={data.introText}
              linktoUrl={data.formPagePicker?.url}
              linkText={data.formPagePicker?.name}
            >
              {data.richText && (
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: data.richText }}
                />
              )}
            </IntroductionBlock>
          }
        />
      </div>

      {renderComponents(data.components)}

      {data.footer && <Footer {...data.footer} />}
    </>
  )
}
