import React, { createContext, FC, ReactNode, useContext } from 'react'

import { stepsCounterData } from '../constants/mocked-data'
import { ChartDataItem } from '../types/chartData'
import filterDataByDateRange from '../utils/filterDataByDateRange'
import { getEndDate, getTodayDate } from '../utils/getDate'

import { DateContext } from './DateProvider'

interface StepsCounterDataProviderProps {
  children: ReactNode
}

export const StepsCounterContext = createContext<ChartDataItem[]>([])

const StepsCounterDataProvider: FC<StepsCounterDataProviderProps> = ({ children }) => {
  const { todayDate } = useContext(DateContext)

  const currentDate = getTodayDate({ todayDate })
  const filteredEndDate = getEndDate({ todayDate })

  const defaultDataContext = filterDataByDateRange(stepsCounterData, new Date(currentDate), new Date(filteredEndDate))

  return <StepsCounterContext.Provider value={defaultDataContext}>{children}</StepsCounterContext.Provider>
}

export default StepsCounterDataProvider
