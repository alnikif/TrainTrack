import { trainingMap } from '../constants/trainingSessionData'
import { getWeekDayFromDate } from '../constants/weekDays'
import { ExerciseData } from '../types/chartData'

export const generateTrainingData = (startDateString: Date | string, endDateString: Date | string) => {
  const data: ExerciseData[] = []
  const currentDate = new Date()
  const endDate = new Date(endDateString) > currentDate ? currentDate : new Date(endDateString)
  const startDate = new Date(startDateString)

  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    const timestamp = d.toISOString()
    const training = trainingMap[getWeekDayFromDate(d)]
    if (training) {
      data.push([timestamp, training])
    }
  }

  return data
}
