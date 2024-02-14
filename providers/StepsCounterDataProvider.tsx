import React, { createContext, FC, ReactNode, useContext } from 'react'

import { stepsCounterData } from '../constants/mocked-data'
import { ChartDataItem } from '../types/chartData'
import filterDataByDateRange from '../utils/filterDataByDateRange'
import { getNextDay } from '../utils/getNextDay'

import { DateContext } from './DateProvider'

interface StepsCounterDataProviderProps {
  children: ReactNode
}

export const StepsCounterContext = createContext<ChartDataItem[]>([])

const StepsCounterDataProvider: FC<StepsCounterDataProviderProps> = ({ children }) => {
  const { selectedDate } = useContext(DateContext)

  const defaultDataContext = filterDataByDateRange(stepsCounterData, selectedDate, getNextDay(selectedDate))

  return <StepsCounterContext.Provider value={defaultDataContext}>{children}</StepsCounterContext.Provider>
}

export default StepsCounterDataProvider
