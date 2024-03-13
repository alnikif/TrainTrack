import { chartTypesArray } from '../../../constants/chartTypes'
import { useChart } from '../../../providers/ChartTypesProvider'
import Dropdown from '../DropdownComponent/Dropdown'

const ChartTypesDropdown = () => {
  const { chartType, setChartType } = useChart()

  const chartTypesOptions = chartTypesArray.map(({ key, title }) => ({
    id: key,
    label: title,
  }))

  return <Dropdown selectedOptionId={chartType} options={chartTypesOptions} onSelect={setChartType} />
}

export default ChartTypesDropdown
