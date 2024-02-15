import React, { createContext, FC, ReactNode, useContext } from 'react'

import { caloriesData, stepsCounterData } from '../constants/mocked-data'
import { ChartDataItem } from '../types/chartData'
import filterDataByDateRange from '../utils/filterDataByDateRange'
import { getNextDay } from '../utils/getNextDay'

import { DateContext } from './DateProvider'

interface CaloriesDataProviderProps {
  children: ReactNode
}

export const CaloriesDataContext = createContext<ChartDataItem[]>([])

const CaloriesDataProvider: FC<CaloriesDataProviderProps> = ({ children }) => {
  const { selectedDate } = useContext(DateContext)

  const defaultDataContext = filterDataByDateRange(caloriesData, selectedDate, getNextDay(selectedDate))

  return <CaloriesDataContext.Provider value={defaultDataContext}>{children}</CaloriesDataContext.Provider>
}

export default CaloriesDataProvider
