import generateCaloriesData from '../utils/generateCaloriesData'
import generateCumulativeStepsData from '../utils/generateCumulativeStepsData'
import generateHeartRateData from '../utils/generateDailyDataArray'
import { generateTrainingData } from '../utils/generateTrainingData'

export const heartRateData = generateHeartRateData('2024-01-01', new Date(), 50, 160)
export const stepsCounterData = generateCumulativeStepsData('2024-01-01', new Date())
export const caloriesData = generateCaloriesData('2024-01-01', new Date())

export const trainingData = generateTrainingData('2024-02-28', new Date())
