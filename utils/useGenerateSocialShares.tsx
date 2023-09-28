import { useEffect, useState } from 'react'

export default function useGenerateUrl(platform: string) {
  const [platformValue, setPlatformValue] = useState<string>(platform)
  useEffect(() => {
    if (typeof window !== undefined) {
      let currentUrl = typeof window !== 'undefined' ? window.location.href : ''

      switch (platform) {
        case 'facebook':
          setPlatformValue(
            `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`
          )
          break

        case 'twitter':
          setPlatformValue(`https://twitter.com/intent/tweet?url=${currentUrl}`)
          break

        case 'linkedin':
          setPlatformValue(
            `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`
          )
          break

        default:
          return
      }
    }
  }, [platform])

  return platformValue
}
