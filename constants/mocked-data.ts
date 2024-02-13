import generateCumulativeStepsData from '../utils/generateCumulativeStepsData'
import generateHeartRateData from '../utils/generateDailyDataArray'
import { getTodayDate } from '../utils/getDate'

const todayDateString = getTodayDate({ todayDate: new Date() })

export const heartRateData = generateHeartRateData('2024-01-01', new Date().toISOString(), 50, 160)
export const stepsCounterData = generateCumulativeStepsData('2024-01-01', new Date().toISOString())
