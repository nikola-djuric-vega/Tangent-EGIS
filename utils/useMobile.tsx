import { useEffect, useState } from 'react'

export default function useMobile() {
  const [screenWidth, setScreenWidth] = useState(0)

  function handleWindowSizeChange() {
    if (typeof window !== undefined) setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    handleWindowSizeChange()

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return screenWidth > 768 ? false : true
}
