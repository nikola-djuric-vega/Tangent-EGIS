export function dataLayerSend(data: any) {
  if (!!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(data)
  }
}
