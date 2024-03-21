import React, { createContext, FC, ReactNode, useContext } from 'react'

import { stepsCounterData } from '../constants/mocked-data'
import { ChartDataItem } from '../types/chartData'
import filterDataByDateRange from '../utils/filterDataByDateRange'

import { DateContext, useDate } from './DateProvider'

interface StepsCounterDataProviderProps {
  children: ReactNode
}

export const StepsCounterContext = createContext<ChartDataItem[]>([])

const StepsCounterDataProvider: FC<StepsCounterDataProviderProps> = ({ children }) => {
  const { dateRange: selectedDate } = useDate()
  const { startDate, endDate } = selectedDate

  const defaultDataContext = filterDataByDateRange(stepsCounterData, startDate, endDate)

  return <StepsCounterContext.Provider value={defaultDataContext}>{children}</StepsCounterContext.Provider>
}

export default StepsCounterDataProvider
