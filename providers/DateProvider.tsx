import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react'

import getDatesList from '../utils/getDatesList'

interface DateRangeType {
  startDate: Date
  endDate: Date | null
}

interface DateContextType {
  dateRange: DateRangeType
  setDateRange: Dispatch<SetStateAction<DateRangeType>>
}

const defaultDateContext: DateContextType = {
  dateRange: { startDate: new Date(), endDate: null },
  setDateRange: () => {
    //
  },
}

export const DateContext = createContext<DateContextType>(defaultDateContext)

interface DateProviderProps {
  children: ReactNode
}

export const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
  const [dateRange, setDateRange] = useState<DateRangeType>({ startDate: new Date(), endDate: null })

  const contextValue: DateContextType = {
    dateRange: dateRange,
    setDateRange,
  }

  return <DateContext.Provider value={contextValue}>{children}</DateContext.Provider>
}

export const useDate = () => {
  const { dateRange, setDateRange } = useContext(DateContext)
  const datesList = getDatesList(dateRange.startDate, dateRange.endDate)
  return {
    datesList,
    dateRange,
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
    setDateRange,
  }
}
