import { ChartDataItem } from '../types/chartData'

const generateHeartRateData = (
  startTimeString: Date | string,
  endTimeString: Date | string,
  minValue: number,
  maxValue: number,
) => {
  const data: ChartDataItem[] = []
  const endTime = new Date(endTimeString)
  const targetDate = new Date(startTimeString)

  while (targetDate <= endTime) {
    const timestamp = targetDate.toISOString()
    const value = Math.random() * (maxValue - minValue) + minValue
    const chartDataItem: ChartDataItem = [timestamp, Number(value.toFixed(2))]

    data.push(chartDataItem)

    targetDate.setMinutes(targetDate.getMinutes() + 60)
  }

  return data
}

export default generateHeartRateData
