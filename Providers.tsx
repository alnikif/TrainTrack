import React, { FC, ReactNode } from 'react'

import CaloriesDataProvider, { CaloriesDataContext } from './providers/CaloriesDataProvider'
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
      <HeartRateDataProvider>
        <StepsCounterDataProvider>
          <CaloriesDataProvider>{children}</CaloriesDataProvider>
        </StepsCounterDataProvider>
      </HeartRateDataProvider>
    </DateProvider>
  )
}

export default Providers
