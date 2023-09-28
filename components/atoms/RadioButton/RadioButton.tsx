import React from 'react'

export interface RadioButtonComponentProps {
  hasError?: boolean
  value: string
  id?: string
  name: string
  setOption(option: string): void
}

export type RadioButtonProps = RadioButtonComponentProps &
  React.InputHTMLAttributes<HTMLInputElement>

export default function RadioButton({
  hasError,
  value,
  id,
  name,
  setOption,
  ...props
}: RadioButtonProps) {
  return (
    <div className="flex items-center ">
      <input
        data-testid="radiobutton-test"
        {...props}
        className="absolute opacity-0 h-6 w-6"
        id={id}
        type="radio"
        value={value}
        name={name}
        onChange={(e) => {
          setOption(e.currentTarget.value)
        }}
      />
      <div className="flex items-center space-x-2">
        <div className="bg-white border-2 rounded-full border-midnight-blue w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2">
          <div className="bg-super-lime rounded-full h-3 w-3 hidden innerCircle" />
        </div>
        <label className="navLinkPrimary" htmlFor={id} data-error={hasError}>
          {name}
        </label>
      </div>
    </div>
  )
}
