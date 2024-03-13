export type ChartDataItem = [string, number]

export interface SeriesItem {
  reps: number
  weight: number
}

export interface Exercise {
  title: string
  series: SeriesItem[]
}

export interface TrainingDetails {
  title: string
  result: number
  sum?: number
  series: SeriesItem[]
}

export type ExerciseResult = [string, TrainingDetails[]]
