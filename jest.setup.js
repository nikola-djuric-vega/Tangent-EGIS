import '@testing-library/jest-dom'
jest.mock(
  'next/image',
  () =>
    function Image(props) {
      // Prevent next.js Image props being passed to HTML DOM nodes in tests, causing warnings
      const { objectFit, priority, objectPosition, layout, alt, ...newProps } =
        props
      /*eslint-disable @next/next/no-img-element */
      return <img {...newProps} alt={alt} />
    }
)

beforeEach(() => {
  const mockIntersectionObserver = jest.fn()
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  })
  window.IntersectionObserver = mockIntersectionObserver
})
