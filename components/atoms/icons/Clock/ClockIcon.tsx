import * as React from 'react'

import { SvgProps } from '../../../../types'

function ClockIcon(props: SvgProps) {
  return (
    <svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#prefix__clip0)" fill="#ABC022">
        <path d="M8.117 1a7 7 0 10.001 14 7 7 0 000-14zm0 12.813a5.813 5.813 0 010-11.626 5.813 5.813 0 010 11.626z" />
        <path d="M10.847 9.978l-2.228-1.61V4.5a.125.125 0 00-.125-.125h-.752a.125.125 0 00-.125.125v4.303c0 .04.019.078.052.102l2.584 1.884c.056.04.134.028.175-.027l.447-.609a.125.125 0 00-.028-.175z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" transform="translate(.117)" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default ClockIcon
