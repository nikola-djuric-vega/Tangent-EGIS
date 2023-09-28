import Link from 'next/link'
import React from 'react'
import { theme } from '../../../../tailwind.config'
import { SvgProps } from '../../../../types'

interface Props extends SvgProps {
  type: 'facebook' | 'linkedin' | 'twitter' | 'subscribe'
  color?: string
}

export default function SocialMediaIcon({
  width = 23,
  height = 23,
  type,
  color = theme.colors['midnight-blue'],
  ...props
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={type !== 'subscribe' ? '0 0 19 19' : '0 0 16 12'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <>
        {type === 'twitter' ? (
          <path
            d="M18.821 5.02159C18.1692 5.30562 17.4598 5.51003 16.7292 5.58964C17.4878 5.13442 18.0558 4.41525 18.3268 3.56705C17.615 3.99478 16.8352 4.29472 16.022 4.45355C15.6821 4.08652 15.271 3.79414 14.8144 3.59461C14.3577 3.39508 13.8653 3.29267 13.3678 3.29378C11.3547 3.29378 9.73582 4.94198 9.73582 6.96457C9.73582 7.2486 9.7699 7.53262 9.82528 7.80588C6.81109 7.64666 4.1228 6.19212 2.33559 3.96511C2.00994 4.52695 1.83929 5.16667 1.84139 5.81772C1.84139 7.09152 2.48257 8.21471 3.46032 8.87528C2.88412 8.85235 2.32141 8.69238 1.81795 8.40836V8.45354C1.81795 10.2373 3.06624 11.7155 4.7299 12.0555C4.41753 12.1374 4.09619 12.1794 3.77346 12.1803C3.53701 12.1803 3.31334 12.1566 3.08754 12.1243C3.54766 13.5789 4.88754 14.6354 6.48304 14.6698C5.23476 15.6574 3.67121 16.2384 1.97346 16.2384C1.66884 16.2384 1.38766 16.2276 1.09583 16.1932C2.70624 17.2368 4.61701 17.8392 6.67475 17.8392C13.355 17.8392 17.0104 12.2491 17.0104 7.39706C17.0104 7.23784 17.0104 7.07861 16.9997 6.91939C17.7069 6.39653 18.3268 5.74887 18.821 5.02159Z"
            fill={color}
          />
        ) : type === 'linkedin' ? (
          <>
            <path
              d="M16.186 16.193h-2.81v-4.41c0-1.052-.023-2.403-1.47-2.403-1.466 0-1.689 1.14-1.689 2.325v4.487H7.403V7.125h2.703v1.237h.036c.378-.715 1.297-1.466 2.667-1.466 2.85 0 3.38 1.877 3.38 4.317v4.98h-.003zM4.225 5.886a1.633 1.633 0 01-1.357-2.544 1.635 1.635 0 111.357 2.544zm1.41 10.307h-2.82V7.125h2.82v9.068zM17.595 0H1.401C.628 0 0 .613 0 1.37v16.261c0 .758.628 1.37 1.401 1.37h16.192c.773 0 1.407-.612 1.407-1.37V1.371C19 .612 18.366 0 17.593 0h.003z"
              fill={color}
            />
            <defs>
              <clipPath id="prefix__clip0">
                <path fill="#fff" d="M0 0h19v19H0z" />
              </clipPath>
            </defs>
          </>
        ) : type === 'facebook' ? (
          <>
            <g clipPath="url(#clip0)">
              <path
                d="M17.4749 0.0741863H1.09779C0.82632 0.0741863 0.565971 0.185396 0.374015 0.383351C0.182059 0.581306 0.0742188 0.849791 0.0742188 1.12974V18.0186C0.0742188 18.2986 0.182059 18.5671 0.374015 18.765C0.565971 18.963 0.82632 19.0742 1.09779 19.0742H9.91583V11.7275H7.52273V8.85113H9.91583V6.74002C9.91583 4.28585 11.3693 2.94846 13.4983 2.94846C14.2138 2.94635 14.9303 2.98435 15.6427 3.06141V5.61585H14.1739C13.0193 5.61585 12.7941 6.18374 12.7941 7.01446V8.84585H15.5547L15.1964 11.7222H12.7931V19.0742H17.4749C17.7464 19.0742 18.0067 18.963 18.1987 18.765C18.3906 18.5671 18.4985 18.2986 18.4985 18.0186V1.12974C18.4985 0.849791 18.3906 0.581306 18.1987 0.383351C18.0067 0.185396 17.7464 0.0741863 17.4749 0.0741863Z"
                fill={color}
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="19" height="19" fill="white" />
              </clipPath>
            </defs>
          </>
        ) : (
          <path
            d="M14.4 0H1.6C.72 0 .008.675.008 1.5L0 10.5c0 .825.72 1.5 1.6 1.5h12.8c.88 0 1.6-.675 1.6-1.5v-9c0-.825-.72-1.5-1.6-1.5zm-.32 3.188L8.424 6.502a.855.855 0 01-.848 0L1.92 3.187a.67.67 0 01-.206-.167.622.622 0 01-.133-.486.613.613 0 01.095-.24.657.657 0 01.189-.186.704.704 0 01.524-.101c.09.017.175.051.251.1L8 5.25l5.36-3.143a.704.704 0 01.524-.1c.09.018.176.052.251.101.076.05.14.113.189.186a.614.614 0 01.082.496.62.62 0 01-.12.23.67.67 0 01-.206.167z"
            fill={color}
          />
        )}
        )
      </>
    </svg>
  )
}