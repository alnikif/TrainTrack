import React from 'react'

import HeartRateChart from '../components/Charts/HeartRateChart'
import StepsCounterChart from '../components/Charts/StepsCounterChart'

const Test = () => {
  return (
    <div className="w-full h-full">
      <HeartRateChart />
      <StepsCounterChart />
    </div>
  )
}

export default Test
