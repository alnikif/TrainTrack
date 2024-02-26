import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'
import React, { useMemo, useState } from 'react'

interface OptionItemType<T> {
  id: T
  label: string
}

interface DropdownPropsTypes<T> {
  readonly options: OptionItemType<T>[]
  readonly selectedOptionId?: string | null | undefined
  readonly onSelect: (optionId: T) => void
}

const Dropdown = <T,>(props: DropdownPropsTypes<T>) => {
  const { selectedOptionId, options, onSelect } = props

  const [isOpen, setIsOpen] = useState(false)

  const selectedOption = useMemo(() => {
    if (!selectedOptionId) return null
    return options.find((item) => item.id == selectedOptionId) || null
  }, [options, selectedOptionId])

  const onClose = () => setIsOpen(false)
  const onToggleDropdown = () => setIsOpen(!isOpen)

  const onSelectOption = (optionId: T) => {
    onSelect(optionId)
    setIsOpen(false)
  }

  return (
    <div className="border border-gray-300 text-xs font-bold box-border w-26 flex flex-col bg-white absolute left-32 z-10">
      <div className="flex items-center p-1 justify-center">
        <FontAwesomeIcon icon={faChevronCircleDown} />
        <div className="p-2 cursor-pointer flex justify-center items-center" onClick={onToggleDropdown}>
          {selectedOption?.label}
          <i className={`${isOpen && 'open'}`} />
        </div>
      </div>
      <div
        className={cx('flex', 'flex-col', 'justify-start', 'border', 'border-solid', 'border-gray-300', 'w-full', {
          block: isOpen,
          hidden: !isOpen,
        })}
      >
        {options.map((item) => (
          <div
            id={String(item.id)}
            key={String(item.id)}
            className="p-3 hover:cursor-pointer"
            onClick={() => onSelectOption(item.id)}
          >
            <span
              className={`transition-opacity duration-200 ${item.id === selectedOptionId ? 'opacity-100' : 'opacity-0 text-gray-600'}`}
            >
              •{' '}
            </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
