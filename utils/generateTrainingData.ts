import { trainingMap } from '../constants/trainingSessionData'
import { getWeekDayFromDate } from '../constants/weekDays'
import { Exercise, ExerciseResult } from '../types/chartData'

export const generateTrainingData = (startDateString: Date | string, endDateString: Date | string) => {
  const result: ExerciseResult[] = []
  const currentDate = new Date()
  const endDate = new Date(endDateString) > currentDate ? currentDate : new Date(endDateString)
  const startDate = new Date(startDateString)
  const trainingList = []
  let total = []
  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    const timestamp = d.toISOString()
    const training = trainingMap[getWeekDayFromDate(d)]

    if (training) {
      trainingList.push(training)
      const exerciseSum = training.map((item) => {
        return item.series.reduce((totalWeight, { reps, weight }) => totalWeight + reps * weight, 0)
      })
      const trainingSum = exerciseSum.reduce((acc, item) => acc + item, 0)
      const totalData = training.map((exercise) => ({
        timestamp: timestamp,
        title: exercise.title,
        result: exercise.series.reduce((totalWeight, { reps, weight }) => totalWeight + reps * weight, 0),
        sum: trainingSum,
        training: training,
      }))

      total = totalData
      result.push(...total)
      total = []
    }
  }

  return result
}
