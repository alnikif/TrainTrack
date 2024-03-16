'use client'
import React, { createContext, FC, ReactNode, useContext, useMemo } from 'react'

import { trainingData } from '../constants/mocked-data'
import { ExerciseResult, TrainingDetails } from '../types/chartData'
import filterDataByDateRange from '../utils/filterDataByDateRange'
import getFormattedDate from '../utils/getFormattedDate'

import { useDate } from './DateProvider'

interface TrainingsDataProviderProps {
  children: ReactNode
}

export const TrainingsDataContext = createContext<ExerciseResult[]>([])

const TrainingsDataProvider: FC<TrainingsDataProviderProps> = ({ children }) => {
  const { dateRange } = useDate()
  const { startDate, endDate } = dateRange
  const defaultDataContext = filterDataByDateRange(trainingData, startDate, endDate)

  return <TrainingsDataContext.Provider value={defaultDataContext}>{children}</TrainingsDataContext.Provider>
}

const useTrainingsData = () => {
  const data = useContext(TrainingsDataContext)

  if (data === undefined) {
    throw new Error('useTrainingsData must be used within a TrainingsDataProvider')
  }

  const dataMap = useMemo(
    () =>
      data.reduce(
        (acc, item) => {
          const [timestamp, training] = item
          const mapKey = getFormattedDate(new Date(timestamp))
          return { ...acc, [mapKey]: training }
        },
        {} as Record<string, TrainingDetails[]>,
      ),
    [data],
  )

  return { trainingData: data, dataMap }
}

export { TrainingsDataProvider, useTrainingsData }
