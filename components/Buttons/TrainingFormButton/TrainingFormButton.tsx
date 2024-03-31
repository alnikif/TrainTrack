import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'

interface TrainingFormButtonProps {
  onClick: () => void
}
const TrainingFormButton: FC<TrainingFormButtonProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border border-gray-300 text-xs font-bold box-border w-26 p-2 flex flex-col bg-white absolute right-11 z-10"
    >
      <div className="flex items-center justify-center cursor-pointer">
        <FontAwesomeIcon icon={faPlusCircle} />
        <span className="p-1  flex justify-center items-center">Add training</span>
      </div>
    </div>
  )
}

export default TrainingFormButton
