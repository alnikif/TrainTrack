import React, { createContext, useState, ReactNode, useContext } from 'react'

import { heartRateData } from '../constants/mocked-data'
import { ChartDataItem } from '../types/chartData'
import filterDataByDateRange from '../utils/filterDataByDateRange'
import { getEndDate, getTodayDate } from '../utils/getDate'

import { DateContext } from './DateProvider'

interface FilterDataProviderProps {
  children: ReactNode
}

export const FilterDataContext = createContext<ChartDataItem[]>([])

export const HeartRateDataProvider: React.FC<FilterDataProviderProps> = ({ children }) => {
  const { todayDate } = useContext(DateContext)

  const currentDate = getTodayDate({ todayDate })
  const filteredEndDate = getEndDate({ todayDate })

  const defaultDataContext = filterDataByDateRange(heartRateData, new Date(currentDate), new Date(filteredEndDate))

  return <FilterDataContext.Provider value={defaultDataContext}>{children}</FilterDataContext.Provider>
}
