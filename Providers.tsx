import React, { FC, ReactNode } from 'react'

import { heartRateData } from './constants/mocked-data'
import { DateProvider } from './providers/DateProvider'
import { FilterDataProvider } from './providers/FilterDataProvider'
import filterDataByDateRange from './utils/filterDataByDateRange'

interface ProvidersType {
  readonly children: ReactNode
}

const Providers: FC<ProvidersType> = (props) => {
  const { children } = props
  // console.log(heartRateData)
  // console.log('heartRateData', filterDataByDateRange(heartRateData, new Date('2024-02-02'), new Date('2024-02-04')))

  return (
    <DateProvider>
      <FilterDataProvider>{children}</FilterDataProvider>
    </DateProvider>
  )
}

export default Providers
