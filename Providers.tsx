import React, { FC, ReactNode } from 'react'

import { DateProvider } from './providers/DateProvider'
import { FilterDataProvider } from './providers/FilterDataProvider'

interface ProvidersType {
  readonly children: ReactNode
}

const Providers: FC<ProvidersType> = (props) => {
  const { children } = props

  return (
    <DateProvider>
      <FilterDataProvider>{children}</FilterDataProvider>
    </DateProvider>
  )
}

export default Providers
