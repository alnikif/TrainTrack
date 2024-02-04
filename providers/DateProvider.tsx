import React, { createContext, useState, ReactNode } from 'react'

interface DateContextType {
  todayDate: Date
  setDate: (newDate: Date) => void
}

const defaultDateContext = {
  todayDate: new Date(),
  setDate: () => {
    //
  },
}

export const DateContext = createContext<DateContextType>(defaultDateContext)

interface DateProviderProps {
  children: ReactNode
}

export const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
  const [todayDate, setTodayDate] = useState(new Date())

  const setDate = (newDate: Date) => {
    setTodayDate(newDate)
  }

  const contextValue: DateContextType = {
    todayDate,
    setDate,
  }

  return <DateContext.Provider value={contextValue}>{children}</DateContext.Provider>
}
