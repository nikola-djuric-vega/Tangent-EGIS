import paramsToUrl from './paramsToUrl'

describe('paramsToUrl utility function', () => {
  it('should return the correct url and no params (array)', () => {
    const params = {
      slug: ['page', 'one'],
    }

    expect(paramsToUrl(params)).toEqual({
      url: '/page/one',
      query: {},
    })
  })

  it('should return the correct url and no params (string)', () => {
    const params = {
      slug: 'test',
    }

    expect(paramsToUrl(params)).toEqual({
      url: '/test',
      query: {},
    })
  })

  it('should return the correct url and supplied params', () => {
    const params = {
      slug: ['page', 'one'],
      page: '1',
    }

    expect(paramsToUrl(params)).toEqual({
      url: '/page/one',
      query: {
        page: '1',
      },
    })
  })
})
