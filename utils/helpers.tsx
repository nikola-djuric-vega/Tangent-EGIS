import React from 'react'
import { BreadcrumbItemProps } from '../components/atoms/Breadcrumb/Breadcrumb'
import { useRouter } from 'next/router'
import useGenerateUrl from './useGenerateSocialShares'
import moment from 'moment'
import 'moment/locale/fr'

export const formatNumber = (num: number) => {
  return String(num).padStart(2, '0')
}

export const formatDate = (date: string) => {
  const d = new Date(date)
  return d
    .toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace('/', '.')
    .replace('/', '.')
}

interface ConditionalProps {
  condition?: boolean
  wrapper: any
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}

export const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalProps) => (condition ? wrapper(children) : children)

export const generateSocialShares = (socialPlatforms: []) => {
  let socialLinks: { label: string; to: string }[] = []
  socialPlatforms?.map((platform: string) => {
    socialLinks.push({
      label: platform.toLowerCase(),
      to: useGenerateUrl(platform.toLowerCase()),
    })
  })
  return socialLinks
}

export const generateBreadcrumbs = (
  ancestors: { name: string; url: string }[],
  pageTitle: string
) => {
  let breadcrumbs: BreadcrumbItemProps[] = []
  ancestors?.map((ancestor: { url: string; name: string }) => {
    breadcrumbs.push({
      text: ancestor.name,
      url: ancestor.url,
    })
  })
  breadcrumbs.push({ text: pageTitle })
  breadcrumbs = breadcrumbs.slice(1)
  return breadcrumbs
}

export function truncateString(str: string, num: number) {
  if (str.length <= num) {
    return str
  }

  const truncatedString = str.slice(0, num)
  const lastCharacter = truncatedString[truncatedString.length - 1]

  if (
    lastCharacter.includes('?') ||
    lastCharacter.includes('.') ||
    lastCharacter.includes('!')
  ) {
    return truncatedString
  }

  return truncatedString + '...'
}

export function getContentTypeTag(alias: string) {
  const type = {
    aboutPage: 'About',
    allNews: 'News',
    eventsListingPage: 'Events',
    careersPage: 'Career',
    countryPage: 'Location',
    pdfDownloadPage: 'Download',
    continentPage: 'Location',
    insightPage: 'Insight',
    insightsListingPage: 'Insights',
    projectPage: 'Project',
    sectorPage: 'Sector',
    subSectorPage: 'Sub-sector',
    servicesPage: 'Service',
    subServicePage: 'Sub-service',
    newsDetailPage: 'News',
    homePage: 'Home',
    cSRPage: 'CSR',
    webinarPage: 'Webinar',
    eventDetailPage: 'Event',
    standardContentPage: 'Standard',
    peoplePage: 'People',
    pressMediaPage: 'Press & Media',
    contactUs: 'Contact',
  }
  // @ts-ignore
  return type[alias] ? type[alias] : null
}

export function getContentTypeTagFrench(alias: string) {
  const type = {
    aboutPage: 'A propos',
    allNews: 'Actualités',
    eventsListingPage: 'Evénements',
    careersPage: 'Carrières',
    countryPage: 'Implantation',
    pdfDownloadPage: 'Télécharger',
    continentPage: 'Implantation',
    insightPage: 'Article',
    insightsListingPage: 'Articles',
    projectPage: 'Projet',
    sectorPage: 'Activité',
    subSectorPage: 'Sous-Activité',
    servicePage: 'Service',
    subServicePage: 'Sous-service',
    newsDetailPage: 'Actualité',
    homePage: "Page d'accueil",
    cSRPage: 'CSR',
    webinarPage: 'Webinaire',
    eventDetailPage: 'Evénement',
    standardContentPage: 'La norme',
    peoplePage: 'Nos collaborateurs',
    pressMediaPage: 'Presse et médias',
    contactUs: 'Contacter',
  }
  // @ts-ignore
  return type[alias] ? type[alias] : null
}

export const generateFilter = (
  pages: any[],
  title: string,
  type: string,
  arrayName: string
) => {
  if (!pages || pages.length === 0) {
    return
  }
  let filters = pages?.map((page) =>
    page[arrayName]?.map(
      (linkedPage: any) => linkedPage.pageTitle && linkedPage.pageTitle.trim()
    )
  )
  let options: { label: string; value: string }[] = []
  filters = [].concat.apply([], filters)
  filters = Array.from(new Set(filters))
  filters &&
    filters.map(
      (filter) => filter && options.push({ label: filter, value: filter })
    )
  return {
    title: title,
    optionGroups: [{ options: options }],
    type: type,
  }
}

export function containsObject(obj: {}, list: []) {
  var i
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true
    }
  }
  return false
}

export const transformUrl = (routeUrl: string, externalLink?: boolean) => {
  if (externalLink) {
    return routeUrl
  }
  const urlRegex =
    /^\/*(home-page(?:-fr | ?:-pt | ?:-es | ?:-de)?|page-d-accueil|pagina-inicial|pagina-de-inicio|startseite)\/*/
  let url = routeUrl

  if (url !== null && url !== undefined) {
    if (url.match(urlRegex)) {
      url = url.replace(urlRegex, '/')
    }

    if (!url.startsWith('/') && !url.startsWith('http')) {
      url = `/${url}`
    }

    if (url !== '/' && url.endsWith('/')) {
      url = url.substring(0, url.length - 1)
    }
  } else {
    url = ''
  }

  return url
}

function handleIndex(number: number) {
  switch (number) {
    case 0:
      return 0

    case 1:
      return 1

    case 2:
      return 8

    case 3:
      return 9

    default:
      return 0
  }
}

export function sortFeaturedProjects(data: any[], featuredProjects: any[]) {
  const tempArray: any[] = []
  const filteredItems = data.filter((item) => {
    let result = true
    featuredProjects?.forEach((featuredProject) => {
      if (featuredProject.id === item.id) {
        result = false
        tempArray.push({ ...item, featured: true })
      }
    })
    return result
  })

  tempArray.forEach((featuredProject, index) => {
    filteredItems.splice(handleIndex(index), 0, featuredProject)
  })
  return filteredItems
}

export function mapDirections(address: string[], googleMaps: boolean) {
  if (address) {
    let tempArr: string[] = []

    address.forEach((a) => tempArr.push(a.replace(/\s/g, '+')))

    const addressFormatted = tempArr.join(',')

    const googleLink: string =
      'https://www.google.com/maps/dir/?api=1&origin=&destination=' +
      addressFormatted

    const bingLink: string =
      'https://bing.com/maps/default.aspx?rtp=adr.' + addressFormatted
    const formatGoogleLink = googleLink.replace(/\s/g, '')

    return googleMaps ? formatGoogleLink : bingLink
  }
}

export function translateShareLabel(
  locale?: string,
  type?: 'project' | 'profile'
) {
  if (locale === 'fr') {
    if (type === 'profile') return 'Partager ce profil'
    if (type === 'project') return 'Partager un projet'
    return 'Partager'
  } else if (locale === 'pt') {
    if (type === 'profile') return 'Compartilhar este perfil'
    if (type === 'project') return 'Compartilhe este projeto'
    return 'Compartilhar'
  } else if (locale === 'es') {
    if (type === 'profile') return 'Comparte este perfil'
    if (type === 'project') return 'Comparte este proyecto'
    return 'Cuota'
  } else {
    if (type === 'profile') return 'Share this profile'
    if (type === 'project') return 'Share this project'
    return 'Share'
  }
}

export default function formatToMomentDate(
  date: any,
  type?: string,
  locale?: string
) {
  if (type === 'full') {
    if (locale === 'fr') {
      return moment(new Date(date)).locale('fr').format('Do MMM YYYY')
    } else {
      return moment(new Date(date)).locale('en').format('Do MMM YYYY')
    }
  } else {
    return moment(new Date(date)).format('DD.MM.YY')
  }
}

export const checkLocale = (
  locale: string | undefined,
  defaultLocale: string | undefined
) => {
  if (locale === 'de') {
    return defaultLocale
  } else {
    return locale
  }
}
