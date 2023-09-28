import React from 'react'
import BingMapsReact from 'bingmaps-react'

interface Props {
  lat: number
  lng: number
}

export default function BingMap({ lat, lng }: Props) {
  return (
    <BingMapsReact
      pushPins={[
        {
          center: { latitude: lat, longitude: lng },
          options: {
            icon: `<svg width="60" height="74" viewBox="0 0 60 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_2442)" filter="url(#filter0_d_1_2442)">
            <path d="M53.0603 14.243C46.6215 1.52936 31.0145 -3.61169 18.207 2.77989C5.39943 9.17147 0.430389 25.2199 6.65919 37.3778C9.59863 43.1441 21.8463 58.1504 27.2352 64.7504C28.565 66.4178 31.0845 66.4178 32.4842 64.7504C37.8732 58.1504 49.9809 43.1441 53.1302 37.3778C57.0495 30.2915 56.9095 21.8157 53.0603 14.243Z" fill="#ABC022"/>
            <path d="M30.3848 10.8381C22.3364 10.8381 15.8276 17.2992 15.8276 25.2887C15.8276 27.4423 16.3175 29.5266 17.2274 31.4023C15.2677 31.9581 13.938 32.0971 13.938 32.7223C13.938 33.0697 14.078 33.2087 14.4979 33.2087C14.9878 33.2087 16.4575 32.9308 17.8572 32.5834C20.3767 36.8213 25.0658 39.7392 30.4548 39.7392C38.5033 39.7392 45.012 33.2781 45.012 25.2887C45.012 17.2992 38.4333 10.8381 30.3848 10.8381ZM30.3848 37.3771C26.1856 37.3771 22.4064 35.2234 20.2368 31.9581C21.9165 31.4023 24.296 30.2213 24.296 30.2213C25.3458 31.7497 27.4454 33.3476 31.0147 33.3476C34.3741 33.3476 37.4535 31.1939 37.4535 30.2213C37.4535 29.6655 37.1035 28.9708 36.2637 28.9708C35.4239 28.9708 33.6742 30.7076 30.4548 30.7076C27.5154 30.7076 26.7455 28.9708 26.7455 28.9708C26.7455 28.9708 29.545 27.2339 30.9447 25.9139C32.3444 24.5939 34.0941 22.3708 34.0941 20.2866C34.0941 18.2023 32.4844 17.1602 31.1547 17.1602C29.8249 17.1602 28.0053 17.5771 25.9057 19.8002C23.8061 22.0234 23.4562 24.5939 23.4562 26.0529C23.4562 27.5118 23.8061 28.6929 23.8061 28.6929C23.8061 28.6929 22.0564 29.735 19.6769 30.6381C18.837 29.0402 18.4171 27.2339 18.4171 25.2887C18.4171 18.6192 23.8761 13.2002 30.5948 13.2002C37.3135 13.2002 42.7724 18.6192 42.7724 25.2887C42.7724 31.9581 37.1035 37.3771 30.3848 37.3771ZM27.1654 22.1623C28.8451 19.6613 30.8047 19.1055 31.5046 19.6613C32.2045 20.2171 31.2247 22.3708 29.545 24.1076C27.9353 25.8445 25.9757 27.2339 25.9757 27.2339C25.9757 27.2339 25.4858 24.7329 27.1654 22.1623Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d_1_2442" x="0" y="0" width="60" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2442"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2442" result="shape"/>
            </filter>
            <clipPath id="clip0_1_2442">
            <rect width="52" height="66" fill="white" transform="translate(4)"/>
            </clipPath>
            </defs>
            </svg>
            `,
          },
        },
      ]}
      bingMapsKey={process.env.NEXT_PUBLIC_BING_MAPS_KEY}
      mapOptions={{
        navigationBarMode: 'square',
      }}
      viewOptions={{
        center: { latitude: lat, longitude: lng },
        zoom: 17,
      }}
    />
  )
}
