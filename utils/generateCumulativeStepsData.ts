import { ChartDataItem } from '../types/chartData'

const generateCumulativeStepsData = (startDateString: string, endDateString: string) => {
  const data: ChartDataItem[] = []
  const currentDate = new Date()
  const startTime = new Date(startDateString)
  const endDate = new Date(endDateString)

  const targetDate = new Date(startTime)

  while (targetDate <= endDate) {
    let total = 0

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
