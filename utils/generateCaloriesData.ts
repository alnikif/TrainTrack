import React from 'react'

import { ChartDataItem } from '../types/chartData'

const GenerateCaloriesData = (startDateString: Date | string, endDateString: Date | string) => {
  const data: ChartDataItem[] = []
  const currentDate = new Date()
  const endDate = new Date(endDateString)

  const targetDate = new Date(startDateString)

  while (targetDate <= endDate) {
    let total = 0

    for (let i = 0; i < 24 || targetDate <= currentDate; i++) {
      const timestamp = targetDate.toISOString()
      const caloriesForHour = Math.floor(Math.random() * 5001)
      total += caloriesForHour
      const chartDataItem: ChartDataItem = [timestamp, total]
      targetDate.setMinutes(targetDate.getMinutes() + 60)
      data.push(chartDataItem)
    }

    targetDate.setDate(targetDate.getDate() + 1)
  }

  return data
}

export default GenerateCaloriesData
