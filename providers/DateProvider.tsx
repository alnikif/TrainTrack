import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'

interface DateContextType {
  selectedDate: { endDate: Date; startDate: Date }
  setSelectedDate: Dispatch<SetStateAction<{ startDate: Date; endDate: Date }>>
}

const defaultDateContext: DateContextType = {
  selectedDate: { startDate: new Date('2024-01-01'), endDate: new Date() },
  setSelectedDate: () => {
    //
  },
}

export const DateContext = createContext<DateContextType>(defaultDateContext)

interface DateProviderProps {
  children: ReactNode
}

export const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState({ startDate: new Date('2024-01-01'), endDate: new Date() })

  const contextValue: DateContextType = {
    selectedDate,
    setSelectedDate,
  }

  return <DateContext.Provider value={contextValue}>{children}</DateContext.Provider>
}
