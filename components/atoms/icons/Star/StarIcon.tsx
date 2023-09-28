import * as React from 'react'
import { SvgProps } from '../../../../types'

function StarIcon(props: SvgProps) {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.1172 5.76797L9.95743 5.00363L7.59059 0.355469L5.26922 5.02651L0.117188 5.84112L3.84223 9.49229L3.02496 14.6439L7.64854 12.2295L12.2955 14.5987L11.4279 9.45532L15.1172 5.76797ZM7.64331 11.16L4.25961 12.927L4.85773 9.15686L2.13161 6.48479L5.90206 5.88861L7.60089 2.47019L9.33302 5.87185L13.1091 6.43125L10.4092 9.12978L11.0441 12.8939L7.64331 11.16Z"
        fill="#ABC022"
      />
    </svg>
  )
}
export default StarIcon
