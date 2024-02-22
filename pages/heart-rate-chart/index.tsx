import React, { useContext } from 'react'

import Chart from '../../components/Chart/Chart'
import { useHeartRateData } from '../../providers/HeartRateDataProvider'

const HeartRateChart = () => {
  const filteredData = useHeartRateData()

  return <Chart data={filteredData} title="Heart Rate" />
}

export default HeartRateChart
