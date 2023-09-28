import clsx from 'clsx'
import React from 'react'

export interface InputComponentProps {
  hasError?: boolean
  label?: string
}
export type InputProps = InputComponentProps &
  React.InputHTMLAttributes<HTMLInputElement>

export default function Input({ hasError, label, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        data-testid="input-test"
        placeholder=" "
        className={clsx(
          'h6 focus:outline-none border-b pb-2 bg-transparent appearance-none w-full',
          hasError
            ? 'text-red border-red'
            : 'text-midnight-blue border-gray-dark'
        )}
        {...props}
      />

      <label
        htmlFor={props.id}
        className="absolute left-0 top-0 -z-1 duration-400 ease-in-out origin-0 h6"
      >
        {label}
      </label>
    </div>
  )
}
