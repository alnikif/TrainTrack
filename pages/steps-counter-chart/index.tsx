import React, { useContext } from 'react'

import Chart from '../../components/Chart/Chart'
import { StepsCounterContext } from '../../providers/StepsCounterDataProvider'

const StepsCounterChart = () => {
  const stepsData = useContext(StepsCounterContext)

  return <Chart data={stepsData} title="Steps Counter" yTitle="Steps" />
}

export default StepsCounterChart
