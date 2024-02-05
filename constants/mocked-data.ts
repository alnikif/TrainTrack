import generateHeartRateData from '../utils/generateDailyDataArray'

export const heartRateData = generateHeartRateData('2024-01-01', new Date().toISOString(), 50, 160)
