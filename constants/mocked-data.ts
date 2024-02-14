import generateCumulativeStepsData from '../utils/generateCumulativeStepsData'
import generateHeartRateData from '../utils/generateDailyDataArray'

export const heartRateData = generateHeartRateData('2024-01-01', new Date(), 50, 160)
export const stepsCounterData = generateCumulativeStepsData('2024-01-01', new Date())
