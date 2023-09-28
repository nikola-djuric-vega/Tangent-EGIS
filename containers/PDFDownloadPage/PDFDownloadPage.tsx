import { PDFDownloadPage as PDFDownloadPageType } from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import renderComponents from '../../utils/renderComponents'
import TopNav from '../../components/organisms/TopNav/TopNav'
import { generateSocialShares, translateShareLabel } from '../../utils/helpers'
import DownloadItems from '../../components/contentTypes/DownloadItems/DownloadItems'
import BasicHeader from '../../components/organisms/BasicHeader/BasicHeader'
import LargeVideoImageBanner from '../../components/organisms/LargeVideoImageBanner/LargeVideoImageBanner'
import Footer from '../../components/organisms/Footer/Footer'
import React from 'react'
import { useRouter } from 'next/router'

interface PDFDownloadPageProps {
  data: PDFDownloadPageType
}

export const PDFDownloadPage = ({ data }: PDFDownloadPageProps) => {
  const { locale } = useRouter()
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
        <BasicHeader
          breadcrumbs={[{ text: data.pageTitle! }]}
          title={data.pageTitle}
          level={3}
          endGridLine
        />
      </div>

      <section className="border-b border-gray-light">
        <div className="container">
          <LargeVideoImageBanner
            imageAltText={data.image?.umbracoAlternateText!}
            image={data.image?.umbracoFile?.large_banner_url}
            blurImageUrl={data.image?.blur_url}
            shareText={translateShareLabel(locale)}
            socialLinks={generateSocialShares(data.socialPlatforms)}
          />
        </div>
      </section>

      {data.downloadItems && (
        <DownloadItems downloadItems={data.downloadItems} />
      )}

      {renderComponents(data.components)}

      {data.footer && <Footer {...data.footer} />}
    </>
  )
}
