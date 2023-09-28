import React from 'react'
import GenericLandingComponent from '../../molecules/GenericLandingComponent/GenericLandingComponent'

export const mockData = {
  itemsPerPage: 2,
  items: [
    <GenericLandingComponent
      key="1"
      title="Title 1"
      content="Content"
      image={{
        url: 'https://media.umbraco.io/dev-egis/3zlehwkj/matthew-hamilton-ru3ap8tncsk-unsplash-1.jpg',
      }}
      firstTag="News"
      secondTag="4mins"
      linkTo="/"
    />,
    <GenericLandingComponent
      key="2"
      title="Title 2"
      content="Content"
      image={{
        url: 'https://media.umbraco.io/dev-egis/3zlehwkj/matthew-hamilton-ru3ap8tncsk-unsplash-1.jpg',
      }}
      firstTag="News"
      secondTag="4mins"
      linkTo="/"
    />,
    <GenericLandingComponent
      key="3"
      title="Title 3"
      content="Content"
      image={{
        url: 'https://media.umbraco.io/dev-egis/3zlehwkj/matthew-hamilton-ru3ap8tncsk-unsplash-1.jpg',
      }}
      firstTag="News"
      secondTag="4mins"
      linkTo="/"
    />,
    <GenericLandingComponent
      key="4"
      title="Title 4"
      content="Content"
      image={{
        url: 'https://media.umbraco.io/dev-egis/3zlehwkj/matthew-hamilton-ru3ap8tncsk-unsplash-1.jpg',
      }}
      firstTag="News"
      secondTag="4mins"
      linkTo="/"
    />,
  ],
}
