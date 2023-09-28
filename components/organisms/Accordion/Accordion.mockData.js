import React from 'react'
import { peopleArray } from '../../molecules/SimpleLinkGridList/SimpleLinkGridList.mockData'
import OverlayLinkGridList from '../OverlayLinkGridList/OverlayLinkGridList'
import GenericLandingComponent from '../../molecules/GenericLandingComponent/GenericLandingComponent'

export const peopleMockData = {
  items: [
    {
      title: 'Global leadership',
      content: <OverlayLinkGridList linkGridArray={peopleArray} simple />,
    },
    {
      title: 'Activities management',
      content: <OverlayLinkGridList linkGridArray={peopleArray} simple />,
    },
  ],
}

export const awardsMockData = {
  title: 'Our awards',
  items: [
    {
      title: '2021',
      content: (
        <div className="grid gap-5 md:gap-10">
          <GenericLandingComponent
            linkTo="/"
            image={{ url: 'images/subsectorbanner.png' }}
            title="Mohammed VI Bridge in Morocco"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sem vitae neque commodo commodo convallis dictum neque. Pellentesque ac enim mollis, condimentum tortor a, ornare leo. Mauris arcu dui, vestibulum ac purus nec, egestas porta felis. Quisque ut felis dapibus, finibus urna quis, bibendum neque. Nullam non augue neque. Proin lobortis efficitur lacus non tincidunt."
            firstTag="Lu Ban 2020 award"
          />
        </div>
      ),
    },
    {
      title: '2020',
      content: (
        <div className="grid gap-5 md:gap-10">
          <GenericLandingComponent
            linkTo="/"
            image={{ url: 'images/subsectorbanner.png' }}
            title="Mohammed VI Bridge in Morocco"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sem vitae neque commodo commodo convallis dictum neque. Pellentesque ac enim mollis, condimentum tortor a, ornare leo. Mauris arcu dui, vestibulum ac purus nec, egestas porta felis. Quisque ut felis dapibus, finibus urna quis, bibendum neque. Nullam non augue neque. Proin lobortis efficitur lacus non tincidunt."
            firstTag="Lu Ban 2020 award"
          />
          <GenericLandingComponent
            linkTo="/"
            image={{ url: 'images/subsectorbanner.png' }}
            title="Mohammed VI Bridge in Morocco"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sem vitae neque commodo commodo convallis dictum neque. Pellentesque ac enim mollis, condimentum tortor a, ornare leo. Mauris arcu dui, vestibulum ac purus nec, egestas porta felis. Quisque ut felis dapibus, finibus urna quis, bibendum neque. Nullam non augue neque. Proin lobortis efficitur lacus non tincidunt."
            firstTag="Lu Ban 2020 award"
          />
        </div>
      ),
    },
  ],
}
