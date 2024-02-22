import React, { createContext, ReactNode, useContext } from 'react'

import { heartRateData } from '../constants/mocked-data'
import { ChartDataItem } from '../types/chartData'
import filterDataByDateRange from '../utils/filterDataByDateRange'

import { useDate } from './DateProvider'

interface FilterDataProviderProps {
  children: ReactNode
}

export const HeartRateDataContext = createContext<ChartDataItem[]>([])

export const HeartRateDataProvider: React.FC<FilterDataProviderProps> = ({ children }) => {
  const { dateRange } = useDate()
  const { startDate, endDate } = dateRange

  const defaultDataContext = filterDataByDateRange(heartRateData, startDate, endDate)

  return <HeartRateDataContext.Provider value={defaultDataContext}>{children}</HeartRateDataContext.Provider>
}

export const useHeartRateData = () => {
  return useContext(HeartRateDataContext)
}
