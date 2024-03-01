import { trainingMap } from '../constants/trainingSessionData'
import { getWeekDayFromDate } from '../constants/weekDays'
import { Exercise, ExerciseResult } from '../types/chartData'

export const generateTrainingData = (startDateString: Date | string, endDateString: Date | string) => {
  const result: ExerciseResult[] = []
  const currentDate = new Date()
  const endDate = new Date(endDateString) > currentDate ? currentDate : new Date(endDateString)
  const startDate = new Date(startDateString)

  // Определяем дату, за которую нужно сгенерировать данные
  const selectedDate = new Date(startDate)

  // Получаем данные только за выбранный день
  const timestamp = selectedDate.toISOString()
  const training = trainingMap[getWeekDayFromDate(selectedDate)]
  if (training) {
    const totalSum = training.map((exercise) => ({
      title: exercise.title,
      result: exercise.series.reduce((totalWeight, { reps, weight }) => totalWeight + reps * weight, 0),
    }))
    result.push(...totalSum)
  }

  return result
}
