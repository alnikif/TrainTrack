import React, { createContext, useState, ReactNode } from 'react'

interface DateContextType {
  selectedDate: Date
  setSelectedDate: (newDate: Date) => void
}

const defaultDateContext = {
  selectedDate: new Date(),
  setSelectedDate: () => {
    //
  },
}

export const DateContext = createContext<DateContextType>(defaultDateContext)

interface DateProviderProps {
  children: ReactNode
}

export const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const contextValue: DateContextType = {
    selectedDate,
    setSelectedDate,
  }

  return <DateContext.Provider value={contextValue}>{children}</DateContext.Provider>
}
