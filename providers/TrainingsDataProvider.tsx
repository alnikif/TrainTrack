import React, { createContext, FC, ReactNode, useContext } from 'react'

import { caloriesData, trainingData } from '../constants/mocked-data'
import { ExerciseData, ExerciseResult } from '../types/chartData'
import filterDataByDateRange from '../utils/filterDataByDateRange'
import filteredTrainingDataByDateRange from '../utils/filteredTrainingDataByDateRange'

import { DateContext } from './DateProvider'

interface TrainingsDataProviderProps {
  children: ReactNode
}

export const TrainingsDataContext = createContext<ExerciseResult[]>([])

const TrainingsDataProvider: FC<TrainingsDataProviderProps> = ({ children }) => {
  const { dateRange: selectedDate } = useContext(DateContext)
  const { startDate, endDate } = selectedDate

  const defaultDataContext = filteredTrainingDataByDateRange(trainingData, startDate, endDate)

  return <TrainingsDataContext.Provider value={defaultDataContext}>{children}</TrainingsDataContext.Provider>
}

export default TrainingsDataProvider
