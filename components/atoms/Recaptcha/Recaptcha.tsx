import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

interface Props {
  children: React.ReactNode
}

export default function Recaptcha({ children }: Props) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}
      scriptProps={{
        async: false, // optional, default to false,
        defer: false, // optional, default to false
        appendTo: 'head', // optional, default to "head", can be "head" or "body",
        nonce: undefined, // optional, default undefined
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
