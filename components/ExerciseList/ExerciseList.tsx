import React, { FC } from 'react'

import { TrainingDetails } from '../../types/chartData'

interface ExerciseListPropsType {
  trainingDetails: TrainingDetails[]
}

const ExerciseList: FC<ExerciseListPropsType> = (props) => {
  const { trainingDetails } = props

  const normalizedTrainingDetails = trainingDetails.map((exercise) => {
    const { title, series } = exercise
    const normalizedSeries = series.map((item, index) => ({ ...item, key: `${title}/${index}` }))
    return { ...exercise, key: title, series: normalizedSeries }
  })

  return (
    <div className="flex">
      {normalizedTrainingDetails.map((exercise, index) => (
        <div key={exercise.key} className="ml-10 flex flex-col p-3 border border-solid border-black border-1">
          <div>{exercise.title}</div>
          {exercise.series.map((item, i) => (
            <div key={item.key}>
              weight: {item.weight} kg, reps: {item.reps}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ExerciseList
