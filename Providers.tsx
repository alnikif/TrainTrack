import React, { FC, ReactNode } from 'react'

import { DateProvider } from './providers/DateProvider'

interface ProvidersType {
  readonly children: ReactNode
}

const Providers: FC<ProvidersType> = (props) => {
  const { children } = props

  return <DateProvider>{children}</DateProvider>
}

export default Providers
