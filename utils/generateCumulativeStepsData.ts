import { ChartDataItem } from '../types/chartData'

const generateCumulativeStepsData = (startTimeString: string, endTimeString: string) => {
  const data: ChartDataItem[] = []
  const startTime = new Date(startTimeString)
  const endTime = new Date(endTimeString)
  const currentDate = new Date(startTime)

  while (currentDate <= endTime) {
    const timestamp = currentDate.toISOString()
    let total = 0
    for (let i = 0; i < 24; i++) {
      const stepsForHour = Math.floor(Math.random() * 5001)
      total += stepsForHour
      const chartDataItem: ChartDataItem = [timestamp, total]
      data.push(chartDataItem)
    }
    total = 0
    currentDate.setDate(currentDate.getDate() + 1)
  }
  return data
}
export default generateCumulativeStepsData
