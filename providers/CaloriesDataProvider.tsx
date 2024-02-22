import React, { createContext, FC, ReactNode, useContext } from 'react'

import { caloriesData } from '../constants/mocked-data'
import { ChartDataItem } from '../types/chartData'
import filterDataByDateRange from '../utils/filterDataByDateRange'

import { DateContext } from './DateProvider'

interface CaloriesDataProviderProps {
  children: ReactNode
}

export const CaloriesDataContext = createContext<ChartDataItem[]>([])

const CaloriesDataProvider: FC<CaloriesDataProviderProps> = ({ children }) => {
  const { dateRange: selectedDate } = useContext(DateContext)
  const { startDate, endDate } = selectedDate

  const defaultDataContext = filterDataByDateRange(caloriesData, startDate, endDate)

  return <CaloriesDataContext.Provider value={defaultDataContext}>{children}</CaloriesDataContext.Provider>
}

export default CaloriesDataProvider
