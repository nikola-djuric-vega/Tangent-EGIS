import React from 'react'
import Statistics from '../../organisms/Statistics/Statistics'

const StatisticsComponent = (data: any) => {
  return data.stats !== null ? <Statistics {...data} /> : <></>
}

export default StatisticsComponent
