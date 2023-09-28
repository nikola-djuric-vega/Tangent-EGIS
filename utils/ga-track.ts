export function gaTrack(...args: any) {
  if (!!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
    window.gtag(...args)
  }
}
