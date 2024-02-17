import React, { FC, ReactNode, createContext, useState, useMemo } from 'react'

import { ChartTypes, DEFAULT_CHART } from '../constants/chartTypes'

interface ChartTypeContextType {
  chartType: ChartTypes
  setChartType: (nextChartType: ChartTypes) => void
}

const defaultChartTypeContext = {
  chartType: DEFAULT_CHART,
  setChartType: () => {
    //
  },
}

export const ChartTypeContext = createContext<ChartTypeContextType>(defaultChartTypeContext)

interface ProvidersType {
  readonly children: ReactNode
}

const ChartTypeProvider: FC<ProvidersType> = (props) => {
  const { children } = props

  const [chartType, setChartType] = useState<ChartTypes>(defaultChartTypeContext.chartType)

  const chartTypesContextValue = useMemo(
    () => ({
      chartType,
      setChartType,
    }),
    [chartType],
  )

  return <ChartTypeContext.Provider value={chartTypesContextValue}>{children}</ChartTypeContext.Provider>
}

export default ChartTypeProvider
