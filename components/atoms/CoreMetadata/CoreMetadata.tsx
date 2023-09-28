import Head from 'next/head'
import { CmsPage } from '../../../types/CMS'
import { transformUrl } from '../../../utils/helpers'

export interface CoreMetadataProps {
  data: CmsPage
}

const CoreMetadata = ({ data }: CoreMetadataProps) => {
  return (
    <Head>
      {data.seoTitle && <title>{data.seoTitle}</title>}
      {data.seoDescription && (
        <meta name="description" content={data.seoDescription} />
      )}
      <link rel="icon" href="/favicon.ico" />
      {!!data.hideFromSearchEngines && <meta name="robots" content="noindex" />}
      {!!data.oGTitle && (
        <>
          <meta property="og:title" content={data.oGTitle} />
          <meta name="twitter:title" content={data.oGTitle} />
        </>
      )}
      {!!data.oGDescription && (
        <>
          <meta property="og:description" content={data.oGDescription} />
          <meta name="twitter:description" content={data.oGDescription} />
        </>
      )}
      {!!data.oGImage ? (
        <meta property="og:image" content={data.oGImage.url} />
      ) : (
        <meta
          property="og:image"
          content={require('../../../public/images/egis-logo.png').default.src}
        />
      )}

      {!!data.oGType && <meta property="og:type" content={data.oGType} />}
      {!!data.oGUrl && (
        <meta property="og:url" content={transformUrl(data.oGUrl.url)} />
      )}
      {!!data.oGLocale && <meta property="og:locale" content={data.oGLocale} />}
      {!!data.oGLocaleAlternate?.length && (
        <meta
          property="og:locale:alternate"
          content={data.oGLocaleAlternate?.join?.(',')}
        />
      )}

      <meta name="twitter:card" content="summary" />
    </Head>
  )
}

export default CoreMetadata
