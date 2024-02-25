export enum ChartTypes {
  LineChart = 'line',
  AreaChart = 'area',
  ColumnChart = 'column',
  BarChart = 'bar',
  ScatterPlot = 'scatter',
}

export interface ChartType {
  key: ChartTypes
  title: string
}

export const DEFAULT_CHART = ChartTypes.ColumnChart

export const chartTypesArray: ChartType[] = Object.entries(ChartTypes).map(([title, key]) => ({ title, key }))
