import Script from 'next/script'
import '../styles/globals.css'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-fade/effect-fade.min.css'
import type { AppContext, AppProps } from 'next/app'
import App from 'next/app'
import React, { useEffect, useState } from 'react'
import CookieBanner from '../components/organisms/CookieBanner/CookieBanner'

import { parseCookies, setCookie } from 'nookies'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import { dataLayerSend } from '../utils/dataLayerSend'
import { transformUrl } from '../utils/helpers'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { locale = 'en' } = router
  const [isVisible, setIsVisible] = useState(false)

  const cookieData = pageProps.data?.cookie

  function handleDeny() {
    setCookie(null, 'cookieResponse', 'false', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    setIsVisible(false)
  }

  function handleAgree() {
    setCookie(null, 'cookieResponse', 'true', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    setIsVisible(false)
  }

  useEffect(() => {
    const cookies = parseCookies()
    if (
      typeof cookies.cookieResponse === 'undefined' ||
      cookies.cookieResponse === 'false'
    ) {
      setIsVisible(true)
    }

    if (!router.isReady) return

    if (typeof cookies.NEXT_LOCALE !== 'undefined') {
      const userSelectedLocale = cookies.NEXT_LOCALE?.toLowerCase()

      const languageRedirect = router.query.languageRedirect

      if (
        userSelectedLocale !== router.locale &&
        (languageRedirect === undefined || languageRedirect !== 'false')
      ) {
        switch (userSelectedLocale) {
          case 'fr':
            router.push(`${transformUrl(pageProps.data.url_fr)}`, undefined, {
              locale: userSelectedLocale,
            })
            break
          case 'en':
            router.push(`${transformUrl(pageProps.data.url_en)}`, undefined, {
              locale: userSelectedLocale,
            })
            break
          case 'es':
            router.push(`${transformUrl(pageProps.data.url_es)}`, undefined, {
              locale: userSelectedLocale,
            })
            break
          case 'pt':
            router.push(`${transformUrl(pageProps.data.url_pt)}`, undefined, {
              locale: userSelectedLocale,
            })
            break
          default:
            break
        }
      }
    }
  }, [])

  useEffect(() => {
    router.events.on('routeChangeComplete', routeChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', routeChangeComplete)
    }
  }, [router.events])

  const routeChangeComplete = (url: string) => {
    dataLayerSend({
      event: 'virtual_pageview',
      page_url: url,
      page_title: document.title,
    })
  }

  return (
    <IntlProvider locale={locale} messages={pageProps.messages}>
      {!!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <Script
          id="gtmTag"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');`,
          }}
          strategy="afterInteractive"
        />
      )}
      <Component {...pageProps} />

      {cookieData && (
        <CookieBanner
          visible={isVisible}
          agreeButtonText={cookieData.agreeButtonText}
          denyButtonText={cookieData.denyButtonText}
          cookieText={cookieData.cookieText}
          handleDeny={() => handleDeny()}
          handleAgree={() => handleAgree()}
        />
      )}
    </IntlProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  const locale = appContext.router.locale || 'en'

  appProps.pageProps.messages = (
    await import(`../translations/compiled-locales/${locale}.json`)
  ).default

  return {
    ...appProps,
  }
}

export default MyApp
