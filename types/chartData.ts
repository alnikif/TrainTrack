export type ExerciseData = [any, any]

export type ChartDataItem = [string, number]

export interface Exercise {
  title: string
  series: { reps: number; weight: number }[]
}

export interface ExerciseResult {
  title: string
  result: number
  timestamp: string
  sum?: number
  training: Exercise[][]
}
