export enum ChartTypes {
  LineChart = 'line',
  AreaChart = 'area',
  ColumnChart = 'column',
  BarChart = 'bar',
  PieChar = 'pie',
  ScatterPlot = 'scatter',
  BubbleChart = 'bubble',
  HeatMap = 'heatmap',
  PolarChart = 'polar',
  GaugeChart = 'gauge',
  BoxPlot = 'boxplot',
  FunnelChart = 'funnel',
  PyramidChart = 'pyramid',
  WaterfallChart = 'waterfall',
  ErrorBarChart = 'errorbar',
  CandlestickChart = 'candlestick',
  OHLCChart = 'ohlc',
  RadarChart = 'radar',
  NetworkGraph = 'networkgraph',
  Treemap = 'treemap',
  SolidGaugeChart = 'solidgauge',
}

export interface ChartType {
  key: ChartTypes
  title: string
}

export const DEFAULT_CHART = ChartTypes.BarChart

export const chartTypesArray: ChartType[] = Object.entries(ChartTypes).map(([title, key]) => ({ title, key }))
