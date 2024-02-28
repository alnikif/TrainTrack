import React, { FC, ReactNode } from 'react'

import CaloriesDataProvider, { CaloriesDataContext } from './providers/CaloriesDataProvider'
import ChartTypeProvider from './providers/ChartTypesProvider'
import { DateProvider } from './providers/DateProvider'
import { HeartRateDataProvider } from './providers/HeartRateDataProvider'
import StepsCounterDataProvider from './providers/StepsCounterDataProvider'
import TrainingsDataProvider from './providers/TrainingsDataProvider'

interface ProvidersType {
  readonly children: ReactNode
}

const Providers: FC<ProvidersType> = (props) => {
  const { children } = props

  return (
    <DateProvider>
      <ChartTypeProvider>
        <HeartRateDataProvider>
          <StepsCounterDataProvider>
            <TrainingsDataProvider>
              <CaloriesDataProvider>{children}</CaloriesDataProvider>
            </TrainingsDataProvider>
          </StepsCounterDataProvider>
        </HeartRateDataProvider>
      </ChartTypeProvider>
    </DateProvider>
  )
}

export default Providers
