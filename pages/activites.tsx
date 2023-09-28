import { GetStaticPropsContext } from 'next'
import React from 'react'
import BasicHeader from '../components/organisms/BasicHeader/BasicHeader'
import ButtonList from '../components/organisms/ButtonList/ButtonList'
import FooterOrganism from '../components/organisms/Footer/Footer'
import TopNav from '../components/organisms/TopNav/TopNav'
import createApolloClient from '../lib/createApolloClient'
import { Footer as FooterPageType, Navigation } from '../types/CMS'
import fetchFooter from '../utils/fetchFooter'
import fetchNavigation from '../utils/fetchNavigation'

export default function sectors({
  data: { footer, navigation },
  locale,
}: {
  data: { footer: FooterPageType; navigation: Navigation }
  locale: string
}) {
  const sectorsFromNavbar = navigation.primaryLinks.filter(
    (primaryLink) =>
      primaryLink.navItemName.name ===
      (locale === 'en'
        ? 'Sectors'
        : locale === 'fr'
        ? 'Activités'
        : locale === 'es'
        ? 'Setores'
        : 'Setores')
  )[0]

  return (
    <div className="flex flex-col min-h-screen">
      {navigation && (
        <TopNav
          primaryLinks={navigation.primaryLinks}
          secondaryLinks={navigation.secondaryLinks}
          url_en={'/sectors/'}
          url_fr={'/fr/activites/'}
          url_es={'/es/sectores/'}
          url_pt={'/pt/setores/'}
          pageTitle={
            locale === 'en'
              ? 'Sectors'
              : locale === 'fr'
              ? 'Activités'
              : locale === 'es'
              ? 'Sectores'
              : 'Setores'
          }
        />
      )}

      {!!sectorsFromNavbar && (
        <div className="border-b border-gray-light ">
          <div className="container">
            <BasicHeader
              endGridLine
              level={3}
              description={sectorsFromNavbar?.text}
              breadcrumbs={[
                { text: 'home', url: '/' },
                {
                  text: sectorsFromNavbar?.navItemName?.name,
                  url: sectorsFromNavbar?.navItemName?.url,
                },
              ]}
              title={sectorsFromNavbar?.navItemName?.name}
            />
          </div>
        </div>
      )}

      <div className="flex-grow mb-6 md:mb-0">
        {sectorsFromNavbar &&
          sectorsFromNavbar?.groups?.map((sector, i) => {
            return (
              <ButtonList
                heading={sector.title}
                key={i}
                countries={sector.pages}
              />
            )
          })}
      </div>
      {footer && <FooterOrganism {...footer} />}
    </div>
  )
}

export async function getStaticProps({
  locale = 'en',
  preview,
}: GetStaticPropsContext) {
  const apolloClient = createApolloClient()

  let pageData = {}
  let navigation: { mainNav: any }[] = []

  let footer: any

  navigation = await fetchNavigation({ apolloClient, preview, locale })

  footer = await fetchFooter({ apolloClient, preview, locale })

  if (!!navigation[0].mainNav.length) {
    pageData = { ...pageData, navigation: navigation[0].mainNav[0] }
  }

  if (footer) {
    pageData = { ...pageData, footer: footer }
  }

  return {
    props: {
      data: pageData,
      locale,
    },
    // Time in seconds that page revalidation occurs
    revalidate: parseInt(process.env.NEXT_REVALIDATE_DURATION || '60', 10),
    notFound: !pageData,
  }
}
