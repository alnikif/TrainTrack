import React, { useContext } from 'react'

import Chart from '../../components/Chart/Chart'
import { FilterDataContext } from '../../providers/HeartRateDataProvider'

const HeartRateChart = () => {
  const filteredData = useContext(FilterDataContext)

  return <Chart data={filteredData} />
}

export default HeartRateChart
