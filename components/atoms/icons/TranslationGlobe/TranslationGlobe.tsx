import React from 'react'
import { theme } from '../../../../tailwind.config'
import { SvgProps } from '../../../../types'

interface Props extends SvgProps {
  color?: string
}

export default function TranslationGlobe({
  width = 17,
  height = 17,
  color = theme.colors['white'],
  ...props
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.15845 0C7.89478 0 7.63404 0.0125076 7.37678 0.0369618C3.23768 0.430407 0 3.91633 0 8.15845C0 12.4006 3.23768 15.8865 7.37677 16.2799C7.63404 16.3044 7.89478 16.3169 8.15845 16.3169C12.6642 16.3169 16.3169 12.6642 16.3169 8.15845C16.3169 3.65266 12.6642 0 8.15845 0ZM7.88873 15.2513C7.97822 15.2546 8.06814 15.2563 8.15845 15.2563C12.0785 15.2563 15.2563 12.0785 15.2563 8.15845C15.2563 4.23841 12.0785 1.0606 8.15845 1.0606C8.06814 1.0606 7.97822 1.06228 7.88873 1.06563C7.62462 1.38592 7.30415 1.81896 6.98297 2.36095C6.20556 3.67282 5.42537 5.62004 5.42537 8.15845C5.42537 10.6968 6.20556 12.6441 6.98297 13.9559C7.30415 14.4979 7.62462 14.931 7.88873 15.2513ZM6.41285 1.27685C3.33686 2.0547 1.0606 4.84075 1.0606 8.15845C1.0606 11.4761 3.33686 14.2622 6.41285 15.04C6.30003 14.8714 6.18525 14.6902 6.07054 14.4966C5.21626 13.055 4.36477 10.923 4.36477 8.15845C4.36477 5.39386 5.21626 3.26186 6.07054 1.82025C6.18525 1.62669 6.30003 1.44551 6.41285 1.27685Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.15845 16.3169C8.42211 16.3169 8.68335 16.3044 8.94061 16.2799C13.0797 15.8865 16.3169 12.4006 16.3169 8.15845C16.3169 3.91632 13.0797 0.43041 8.94061 0.0369657C8.68335 0.0125115 8.42211 2.30503e-08 8.15845 0C3.65266 -3.93908e-07 3.93908e-07 3.65266 0 8.15845C-3.93908e-07 12.6642 3.65266 16.3169 8.15845 16.3169ZM8.42866 1.06563C8.33917 1.06229 8.24875 1.0606 8.15845 1.0606C4.23841 1.0606 1.0606 4.23841 1.0606 8.15845C1.0606 12.0785 4.23841 15.2563 8.15845 15.2563C8.24876 15.2563 8.33916 15.2546 8.42866 15.2513C8.69276 14.931 9.01323 14.4979 9.33442 13.9559C10.1118 12.6441 10.892 10.6969 10.892 8.15845C10.892 5.62005 10.1118 3.67282 9.33442 2.36095C9.01324 1.81896 8.69276 1.38593 8.42866 1.06563ZM9.90453 15.04C12.9805 14.2622 15.2563 11.4761 15.2563 8.15845C15.2563 4.84074 12.9805 2.0547 9.90453 1.27685C10.0174 1.44552 10.1321 1.62669 10.2468 1.82026C11.1011 3.26186 11.9526 5.39386 11.9526 8.15845C11.9526 10.923 11.1011 13.055 10.2468 14.4966C10.1321 14.6902 10.0173 14.8714 9.90453 15.04Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.093 6.24126H1.22363V5.18066H15.093V6.24126Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.093 11.1363H1.22363V10.0757H15.093V11.1363Z"
        fill={color}
      />
    </svg>
  )
}