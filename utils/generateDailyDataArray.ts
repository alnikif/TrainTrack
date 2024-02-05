import { ChartDataItem } from '../types/chartData'

const generateHeartRateData = (startTimeString: string, endTimeString: string, minValue: number, maxValue: number) => {
  const data: ChartDataItem[] = []
  const startTime = new Date(startTimeString)
  const endTime = new Date(endTimeString)
  const currentDate = new Date(startTime)

  while (currentDate <= endTime) {
    const timestamp = currentDate.toISOString()
    const value = Math.random() * (maxValue - minValue) + minValue

    const chartDataItem: ChartDataItem = [timestamp, Number(value.toFixed(2))]
    data.push(chartDataItem)

    currentDate.setMinutes(currentDate.getMinutes() + 60)
  }

  return data
}

export default generateHeartRateData
