import { ChartDataItem } from '../types/chartData'

const generateCumulativeStepsData = (startTimeString: string, endTimeString: string, initialSteps: number) => {
  const data: ChartDataItem[] = []
  const startTime = new Date(startTimeString)
  const endTime = new Date(endTimeString)
  const currentDate = new Date(startTime)
  let totalSteps = initialSteps

  // Loop until the current date is equal to or greater than the end time
  while (currentDate <= endTime) {
    const timestamp = currentDate.toISOString()

    // Randomly generate steps for the current day
    const stepsForDay = Math.floor(Math.random() * 100) + 1 // Adjust this range as needed

    // Update total steps count
    totalSteps += stepsForDay

    // Create a new data point with the current timestamp and the cumulative steps count
    const chartDataItem: ChartDataItem = [timestamp, totalSteps]
    data.push(chartDataItem)

    // Increment the current date by one hour (adjust as needed)
    currentDate.setHours(currentDate.getHours() + 1)
  }

  return data
}

export default generateCumulativeStepsData
