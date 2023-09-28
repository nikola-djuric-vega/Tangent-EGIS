import React, { useEffect, useRef } from 'react'

export const useOnClickOutside = (handler: any) => {
  const domNode = useRef<HTMLElement>(null)

  useEffect(() => {
    const onClickOutside = (event: any) => {
      if (!domNode.current?.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener('mousedown', onClickOutside)

    return () => {
      document.removeEventListener('mousedown', onClickOutside)
    }
  })

  return domNode
}
