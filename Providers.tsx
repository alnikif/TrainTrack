'use client'
import React, { FC, ReactNode } from 'react'

import CaloriesDataProvider from './providers/CaloriesDataProvider'
import { ChartTypeProvider } from './providers/ChartTypesProvider'
import { DateProvider } from './providers/DateProvider'
import { HeartRateDataProvider } from './providers/HeartRateDataProvider'
import StepsCounterDataProvider from './providers/StepsCounterDataProvider'
import { TrainingsDataProvider } from './providers/TrainingsDataProvider'

interface ProvidersType {
  readonly children: ReactNode
}

const Providers: FC<ProvidersType> = (props) => {
  const { children } = props

  return (
    <DateProvider>
      <ChartTypeProvider>
        <TrainingsDataProvider>
          <HeartRateDataProvider>
            <StepsCounterDataProvider>
              <CaloriesDataProvider>{children}</CaloriesDataProvider>
            </StepsCounterDataProvider>
          </HeartRateDataProvider>
        </TrainingsDataProvider>
      </ChartTypeProvider>
    </DateProvider>
  )
}

export default Providers
