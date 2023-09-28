import * as React from 'react'

import { SvgProps } from '../../../../types'

function BookIcon(props: SvgProps) {
  return (
    <svg
      width={11}
      height={13}
      viewBox="0 0 11 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M1 9.75V1h8.75v8.75H1zm0 0v1.563c0 .517.42.937.938.937H9.75"
        stroke="#ABC022"
        strokeWidth={1.25}
        strokeLinecap="square"
      />
      <path d="M2.875 3.5h5M2.875 6h3.75" stroke="#ABC022" strokeWidth={1.25} />
    </svg>
  )
}
export default BookIcon
