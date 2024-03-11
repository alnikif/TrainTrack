import React, { FC } from 'react'

import { Exercise, ExerciseResult } from '../../types/chartData'

interface ExerciseListPropsType {
  exercisesList: Exercise[] | null | undefined
}

const ExerciseList: FC<ExerciseListPropsType> = ({ exercisesList }) => {
  return (
    <div className="flex">
      {exercisesList?.map((el, index) => (
        <div className="ml-10 flex flex-col p-3 border border-solid border-black border-1" key={index}>
          <div>{el.title}</div>
          {el.series.map((item, i) => (
            <div key={i}>
              weight: {item.weight} kg, reps: {item.reps}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ExerciseList
