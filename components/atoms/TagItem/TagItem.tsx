import React from 'react'
import clsx from 'clsx'

export default function TagItem({
  variant,
  buttonText,
}: {
  variant: 'primary' | 'cta'
  buttonText: string
}) {
  return (
    <button
      className={clsx(
        'font-bold px-5 py-2 rounded-full border-2 border-transparent transition duration-300 ease-in-out whitespace-nowrap',
        {
          'bg-teal-blue text-white hover:bg-transparent hover:text-teal-blue hover:border-teal-blue':
            variant === 'primary',
          'bg-steel-gray-light text-black hover:bg-transparent hover:text-midnight-blue hover:border-midnight-blue':
            variant === 'cta',
        }
      )}
    >
      {buttonText}
    </button>
  )
}
