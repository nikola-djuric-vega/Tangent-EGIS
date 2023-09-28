import clsx from 'clsx'
import { GetStaticPropsContext } from 'next'
import React from 'react'
import BasicHeader from '../components/organisms/BasicHeader/BasicHeader'
import ButtonList from '../components/organisms/ButtonList/ButtonList'
import FooterOrganism from '../components/organisms/Footer/Footer'
import TopNav from '../components/organisms/TopNav/TopNav'
import createApolloClient from '../lib/createApolloClient'
import { Footer as FooterPageType, Navigation } from '../types/CMS'
import fetchContinents from '../utils/fetchContinents'
import fetchFooter from '../utils/fetchFooter'
import fetchNavigation from '../utils/fetchNavigation'

interface ContinentProps {
  __typename: string
  children: { items: { name: string; url: string }[] }
  name: string
}

export default function locations({
  data: { footer, navigation, continents },
  locale,
}: {
  data: {
    footer: FooterPageType
    navigation: Navigation
    continents: ContinentProps[]
  }
  locale: string
}) {
  const locationsFromNavbar = navigation.primaryLinks.filter(
    (primaryLink) =>
      primaryLink.navItemName.name ===
      (locale === 'en' ? 'Locations' : 'Implantations')
  )[0]

  return (
    <div>
      {navigation && (
        <TopNav
          primaryLinks={navigation.primaryLinks}
          secondaryLinks={navigation.secondaryLinks}
          url_en={'/locations/'}
          url_fr={'/fr/implantations/'}
          pageTitle={locale === 'en' ? 'Locations' : 'Implantations'}
        />
      )}
      {locationsFromNavbar && (
        <div className="border-b border-gray-light">
          <div className="container">
            <BasicHeader
              endGridLine
              level={3}
              description={locationsFromNavbar?.text}
              breadcrumbs={[
                {
                  text: locationsFromNavbar?.navItemName?.name,
                  url: locationsFromNavbar?.navItemName?.url,
                },
              ]}
              title={locationsFromNavbar?.navItemName?.name}
            />
          </div>
        </div>
      )}

      {continents &&
        continents.map((continent, index) => {
          return (
            <div
              key={`continent_item_${index}`}
              className={clsx(
                index === continents.length - 1 && 'mb-5 md:mb-0'
              )}
            >
              <ButtonList
                heading={continent.name}
                key={index}
                countries={continent?.children?.items}
              />
            </div>
          )
        })}

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

  let footer = {}

  let continents = {}

  navigation = await fetchNavigation({ apolloClient, preview, locale })

  footer = await fetchFooter({ apolloClient, preview, locale })

  continents = await fetchContinents({ apolloClient, preview, locale })

  if (!!navigation[0].mainNav.length) {
    pageData = { ...pageData, navigation: navigation[0].mainNav[0] }
  }

  if (footer) {
    pageData = { ...pageData, footer: footer }
  }

  if (continents) {
    pageData = { ...pageData, continents: continents }
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
