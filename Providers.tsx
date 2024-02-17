import React, { FC, ReactNode } from 'react'

import CaloriesDataProvider, { CaloriesDataContext } from './providers/CaloriesDataProvider'
import ChartTypeProvider from './providers/ChartTypesProvider'
import { DateProvider } from './providers/DateProvider'
import { HeartRateDataProvider } from './providers/HeartRateDataProvider'
import StepsCounterDataProvider from './providers/StepsCounterDataProvider'

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
            <CaloriesDataProvider>{children}</CaloriesDataProvider>
          </StepsCounterDataProvider>
        </HeartRateDataProvider>
      </ChartTypeProvider>
    </DateProvider>
  )
}

export default Providers
