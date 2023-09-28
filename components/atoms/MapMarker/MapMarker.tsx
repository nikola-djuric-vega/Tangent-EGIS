export default function MapMarker(props: any) {
  return (
    <svg
      style={{
        transform: 'translateZ(0) translate(-50%, -100%)',
        backfaceVisibility: 'hidden',
      }}
      width={60}
      height={74}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)" filter="url(#b)">
        <path
          d="M53.06 14.243C46.621 1.529 31.014-3.612 18.207 2.78 5.399 9.17.43 25.22 6.659 37.378 9.6 43.144 21.846 58.15 27.235 64.75c1.33 1.668 3.85 1.668 5.25 0 5.388-6.6 17.496-21.606 20.645-27.372 3.92-7.087 3.78-15.562-.07-23.135Z"
          fill="#ABC022"
        />
        <path
          d="M30.385 10.838c-8.049 0-14.557 6.461-14.557 14.45 0 2.154.49 4.239 1.4 6.114-1.96.556-3.29.695-3.29 1.32 0 .348.14.487.56.487.49 0 1.96-.278 3.36-.626a14.665 14.665 0 0 0 12.597 7.156c8.048 0 14.557-6.46 14.557-14.45 0-7.99-6.579-14.45-14.627-14.45Zm0 26.54c-4.2 0-7.979-2.155-10.148-5.42 1.68-.556 4.059-1.737 4.059-1.737 1.05 1.529 3.15 3.127 6.719 3.127 3.36 0 6.438-2.154 6.438-3.127 0-.555-.35-1.25-1.19-1.25s-2.589 1.737-5.808 1.737c-2.94 0-3.71-1.737-3.71-1.737s2.8-1.737 4.2-3.057c1.4-1.32 3.15-3.543 3.15-5.627 0-2.085-1.61-3.127-2.94-3.127-1.33 0-3.15.417-5.25 2.64-2.099 2.223-2.449 4.794-2.449 6.253 0 1.459.35 2.64.35 2.64s-1.75 1.042-4.13 1.945c-.839-1.598-1.259-3.404-1.259-5.35 0-6.669 5.46-12.088 12.178-12.088 6.718 0 12.177 5.42 12.177 12.089 0 6.67-5.669 12.088-12.387 12.088Zm-3.22-15.216c1.68-2.5 3.64-3.056 4.34-2.5.7.555-.28 2.709-1.96 4.446-1.61 1.736-3.57 3.126-3.57 3.126s-.49-2.501 1.19-5.072Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(4)" d="M0 0h52v66H0z" />
        </clipPath>
        <filter
          id="b"
          x={0}
          y={0}
          width={60}
          height={74}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_2442"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_2442"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
