import { PageTypeNames } from '../types/CMS'
import generateRoute from './generateRoute'

describe('generateRoute utility function', () => {
  it('should return the correct slug without localisation', () => {
    const params = {
      route: { id: '1', url: '/foo/bar', __typename: PageTypeNames.HOME_PAGE },
    }

    expect(generateRoute(params)).toEqual({
      params: {
        slug: ['foo', 'bar'],
      },
    })
  })

  it('should return the locale property', () => {
    const params = {
      route: { id: '1', url: '/foo/bar', __typename: PageTypeNames.HOME_PAGE },
      locale: 'en',
    }

    expect(generateRoute(params)).toEqual({
      params: {
        slug: ['foo', 'bar'],
      },
      locale: 'en',
    })
  })

  it('should return the correct object for the root-most route', () => {
    const params = {
      route: { id: '1', url: '/', __typename: PageTypeNames.HOME_PAGE },
    }

    expect(generateRoute(params)).toEqual({
      params: {
        slug: false,
      },
    })
  })
})
