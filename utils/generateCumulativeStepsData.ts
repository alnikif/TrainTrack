import { ChartDataItem } from '../types/chartData'

const generateCumulativeStepsData = (startDateString: Date | string, endDateString: Date | string) => {
  const data: ChartDataItem[] = []
  const currentDate = new Date()
  const endDate = new Date(endDateString) > currentDate ? currentDate : new Date(endDateString)
  const startDate = new Date(startDateString)
  let total = 0

  for (let d = startDate; d <= endDate; d.setHours(d.getHours() + 1)) {
    if (d.getHours() === 1) total = 0
    const timestamp = d.toISOString()
    const stepsForHour = Math.floor(Math.random() * 701)
    total += d.getHours() > 0 && d.getHours() < 7 ? 0 : stepsForHour
    data.push([timestamp, total])
  }

  return data
}

export default generateCumulativeStepsData
