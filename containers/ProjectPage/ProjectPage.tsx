import { ProjectPage as ProjectPageType } from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import renderComponents from '../../utils/renderComponents'
import TopNav from '../../components/organisms/TopNav/TopNav'
import LargeVideoImageBanner from '../../components/organisms/LargeVideoImageBanner/LargeVideoImageBanner'
import ProjectHeader from '../../components/organisms/ProjectHeader/ProjectHeader'
import { generateSocialShares, translateShareLabel } from '../../utils/helpers'
import React from 'react'
import Footer from '../../components/organisms/Footer/Footer'
import Translation from '../../components/organisms/Translation/Translation'
import { useRouter } from 'next/router'

interface ProjectPageProps {
  data: ProjectPageType
}

export const ProjectPage = ({ data }: ProjectPageProps) => {
  const breadcrumbs = [
    { url: data?.parent?.url, text: data?.parent?.name },
    { text: data.pageTitle! },
  ]

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
      <Translation data={data} />

      <div className="container">
        <ProjectHeader
          breadcrumbs={breadcrumbs}
          title={data.pageTitle!}
          subTitle={data.label}
          introText={data.introductionText}
          linkText={data?.contactLink?.name}
          linkUrl={data?.contactLink?.url}
          image={data.image}
          shareText={translateShareLabel(locale, 'project')}
          socialLinks={generateSocialShares(data.socialPlatforms)}
        />
      </div>

      <section className="border-b border-gray-light hidden md:inline">
        <div className="container">
          <LargeVideoImageBanner
            imageAltText={
              data.image?.umbracoAlternateText! || data?.image?.name!
            }
            image={data.image?.umbracoFile?.large_banner_url}
            blurImageUrl={data.image?.blur_url}
            shareText={translateShareLabel(locale, 'project')}
            socialLinks={generateSocialShares(data.socialPlatforms)}
          />
        </div>
      </section>

      {renderComponents(data.components)}

      {data.footer && <Footer {...data.footer} />}
    </>
  )
}
