import { formatBytes } from './formatBytes'

describe('formatBytes helper function unit tests', () => {
  it('formatBytes should return correct value with no deciaml point', () => {
    expect(formatBytes(2, -1)).toBe('2 Bytes')
  })

  it('formatBytes should return correct value with two deciaml point', () => {
    expect(formatBytes(5250000, 2)).toBe('5.01 MB')
  })

  it('formatBytes should return 0 bytes when 0 is entered', () => {
    expect(formatBytes(0)).toBe('0 Bytes')
  })
})
