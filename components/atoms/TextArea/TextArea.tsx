import styles from './TextArea.module.scss'
import React, { useRef, useState } from 'react'
import clsx from 'clsx'

export interface TextAreaComponentProps {
  isError?: boolean
  label?: string
}
export type TextAreaProps = TextAreaComponentProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = ({ isError, label, ...props }: TextAreaProps) => {
  const [textLength, setTextLength] = useState<number>(0)

  const MAX_LENGTH = 500
  const charactersRemaining = MAX_LENGTH - textLength

  return (
    <div className="relative">
      <textarea
        data-testid="text-area-test"
        maxLength={MAX_LENGTH}
        placeholder=" "
        onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
          setTextLength(e.currentTarget.value.length)
        }
        {...props}
        className={clsx(
          'resize-none h6 focus:outline-none border-b pb-20 bg-transparent appearance-none w-full',
          isError
            ? 'text-red border-red'
            : 'text-midnight-blue border-gray-dark'
        )}
      />

      <label
        htmlFor={props.id}
        className="absolute top-0 left-0 -z-1 duration-400 ease-in-out origin-0 h6"
      >
        {label}
      </label>

      <div className="flex flex-col space-y-2"></div>
    </div>
  )
}

export default TextArea
