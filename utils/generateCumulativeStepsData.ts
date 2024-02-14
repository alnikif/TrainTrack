import { ChartDataItem } from '../types/chartData'

const generateCumulativeStepsData = (startDateString: Date | string, endDateString: Date | string) => {
  const data: ChartDataItem[] = []
  const currentDate = new Date()
  const endDate = new Date(endDateString)

  const targetDate = new Date(startDateString)
  let total = 0

  while (targetDate <= endDate) {
    for (let i = 0; i < 24 || targetDate <= currentDate; i++) {
      const timestamp = targetDate.toISOString()
      const stepsForHour = Math.floor(Math.random() * 5001)
      total += stepsForHour
      const chartDataItem: ChartDataItem = [timestamp, total]
      targetDate.setMinutes(targetDate.getMinutes() + 60)
      data.push(chartDataItem)
    }

    total = 0
    targetDate.setDate(targetDate.getDate() + 1)
  }

  return data
}

export default generateCumulativeStepsData
