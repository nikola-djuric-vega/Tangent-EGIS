import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import TagList from './TagList'

describe('TagList', () => {
  it('should render TagList component', () => {
    render(
      <TagList
        variant="cta"
        tags={[{ name: 'Hello' }, { name: 'Tag' }]}
        title="TagTitle"
      />
    )
    expect(screen.getByText('Hello')).toBeTruthy()
    expect(screen.getByText('Tag')).toBeTruthy()
    expect(screen.getByText('TagTitle')).toBeTruthy()
  })

  test('it should scroll and change left position', async () => {
    const TagListComponent = render(
      <TagList
        variant="cta"
        tags={[{ name: 'Egis' }, { name: 'City Life' }]}
        title="TagTitle"
      />
    )
    await fireEvent.scroll(TagListComponent.getByTestId('scroll'))
    expect(TagListComponent.getByTestId('scroll')).toHaveStyle('left: 100')
  })
})
