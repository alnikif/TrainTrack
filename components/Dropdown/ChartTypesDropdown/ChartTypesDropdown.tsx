import React, { useContext } from 'react'

import { chartTypesArray } from '../../../constants/chartTypes'
import { ChartTypeContext } from '../../../providers/ChartTypesProvider'
import Dropdown from '../DropdownComponent/Dropdown'

const ChartTypesDropdown = () => {
  const { chartType, setChartType } = useContext(ChartTypeContext)

  const chartTypesOptions = chartTypesArray.map(({ key, title }) => ({
    id: key,
    label: title,
  }))

  return <Dropdown selectedOptionId={chartType} options={chartTypesOptions} onSelect={setChartType} />
}

export default ChartTypesDropdown
