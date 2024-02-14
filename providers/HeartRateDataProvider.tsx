import React, { createContext, ReactNode, useContext } from 'react'

import { heartRateData } from '../constants/mocked-data'
import { ChartDataItem } from '../types/chartData'
import filterDataByDateRange from '../utils/filterDataByDateRange'
import { getNextDay } from '../utils/getNextDay'

import { DateContext } from './DateProvider'

interface FilterDataProviderProps {
  children: ReactNode
}

export const FilterDataContext = createContext<ChartDataItem[]>([])

export const HeartRateDataProvider: React.FC<FilterDataProviderProps> = ({ children }) => {
  const { selectedDate } = useContext(DateContext)

  const defaultDataContext = filterDataByDateRange(heartRateData, selectedDate, getNextDay(selectedDate))

  return <FilterDataContext.Provider value={defaultDataContext}>{children}</FilterDataContext.Provider>
}
