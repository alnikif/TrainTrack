import { trainingMap } from '../constants/trainingSessionData'
import { getWeekDayFromDate } from '../constants/weekDays'
import { ExerciseResult } from '../types/chartData'

export const generateTrainingData = (startDateString: Date | string, endDateString: Date | string) => {
  const result: ExerciseResult[] = []
  const currentDate = new Date()
  const endDate = new Date(endDateString) > currentDate ? currentDate : new Date(endDateString)
  const startDate = new Date(startDateString)

  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    const timestamp = d.toISOString()
    const training = trainingMap[getWeekDayFromDate(d)]

    if (training) {
      const exerciseSum = training.map((item) => {
        return item.series.reduce((totalWeight, { reps, weight }) => totalWeight + reps * weight, 0)
      })

      const sum = exerciseSum.reduce((acc, item) => acc + item, 0)

      const trainingData = training.map((exercise) => {
        const { title, series } = exercise
        const result = series.reduce((totalWeight, { reps, weight }) => totalWeight + reps * weight, 0)

        return { title, result, sum, series }
      })

      result.push([timestamp, trainingData])
    }
  }

  return result
}
