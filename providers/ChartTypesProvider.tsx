import React, { FC, ReactNode, createContext, useState, useMemo, useContext } from 'react'

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

const ChartTypeContext = createContext<ChartTypeContextType>(defaultChartTypeContext)

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

const useChart = () => useContext(ChartTypeContext)

export { ChartTypeProvider, useChart }
