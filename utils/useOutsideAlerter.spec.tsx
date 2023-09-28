import { RefObject } from 'react'
import { fireEvent } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { useOutsideAlerter } from './useOutsideAlerter'

test('invokes the callback only when a click occurs outside of the element', () => {
  const callback = jest.fn()
  const div = document.createElement('div')
  document.body.appendChild(div)

  const ref = { current: div } as RefObject<HTMLDivElement>
  renderHook(() => useOutsideAlerter(ref, callback))

  fireEvent.mouseDown(div)
  expect(callback).toHaveBeenCalledTimes(0)

  fireEvent.mouseDown(document.body)
  expect(callback).toHaveBeenCalledTimes(1)

  fireEvent.mouseDown(div)
  expect(callback).toHaveBeenCalledTimes(1)
})
