import React, { FC } from 'react'

import { Exercise, ExerciseResult } from '../../types/chartData'

interface ExerciseListPropsType {
  exercisesList: ExerciseResult[] | null | undefined
}

const ExerciseList: FC<ExerciseListPropsType> = ({ exercisesList }) => {
  console.log(exercisesList)
  return (
    <div>
      {exercisesList?.map((el, index) => {
        return (
          <div className="ml-10" key={index}>
            {el.title}
            <span key={el.title}></span>
          </div>
        )
      })}
    </div>
  )
}

export default ExerciseList
