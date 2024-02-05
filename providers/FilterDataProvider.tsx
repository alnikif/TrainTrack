import React, { createContext, useState, ReactNode, useContext } from 'react'

import { heartRateData } from '../constants/mocked-data'
import { ChartDataItem } from '../types/chartData'
import filterDataByDateRange from '../utils/filterDataByDateRange'

import { DateContext } from './DateProvider'

interface FilterDataProviderProps {
  children: ReactNode
}

export const FilterDataContext = createContext<ChartDataItem[]>([])

export const FilterDataProvider: React.FC<FilterDataProviderProps> = ({ children }) => {
  const { todayDate } = useContext(DateContext)
  const year = todayDate.getFullYear()
  const month = (todayDate.getMonth() + 1).toString().padStart(2, '0')
  const day = todayDate.getDate().toString().padStart(2, '0')
  const currentDate = `${year}-${month}-${day}`
  const defaultDataContext = filterDataByDateRange(heartRateData, new Date(currentDate), new Date('2024-02-06'))

  return <FilterDataContext.Provider value={defaultDataContext}>{children}</FilterDataContext.Provider>
}
