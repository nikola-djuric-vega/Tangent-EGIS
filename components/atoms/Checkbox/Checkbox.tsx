import clsx from 'clsx'
import React, { useState } from 'react'
import Tick from '../icons/Tick/Tick'

export interface CheckboxComponentProps {
  text: string
  hasError?: boolean
}

export type CheckboxProps = CheckboxComponentProps &
  React.InputHTMLAttributes<HTMLInputElement>

export default function Checkbox({
  text,
  id,
  name,
  value,
  ...props
}: CheckboxProps) {
  return (
    <div className="flex items-center mt-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        {...props}
        className="opacity-0 absolute h-6 w-6"
      />
      <div className="flex items-center">
        <div className="tick bg-white border-2 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2">
          <Tick />
        </div>
        <label
          htmlFor={id}
          className="select-none font-sans font-bold text-sm leading-4 text-midnight-blue"
        >
          {text}
        </label>
      </div>
    </div>
  )
}
