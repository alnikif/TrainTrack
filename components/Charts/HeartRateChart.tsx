import React, { useContext } from 'react'

import { FilterDataContext } from '../../providers/HeartRateDataProvider'
import Chart from '../Chart/Chart'

const HeartRateChart = () => {
  const filteredData = useContext(FilterDataContext)

  return <Chart data={filteredData} />
}

export default HeartRateChart
