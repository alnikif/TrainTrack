import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'
import React, { useMemo, useState } from 'react'

import styles from './Dropdown.module.scss'

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
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeaderWrapper}>
        <FontAwesomeIcon icon={faChevronCircleDown} />
        <div className={styles.dropdownHeader} onClick={onToggleDropdown}>
          {selectedOption?.label}
          <i className={`${isOpen && 'open'}`} />
        </div>
      </div>
      <div className={cx(styles.dropdownBody, { [styles.open]: isOpen })}>
        {options.map((item) => (
          <div
            id={String(item.id)}
            key={String(item.id)}
            className={styles.dropdownItem}
            onClick={() => onSelectOption(item.id)}
          >
            <span className={cx(styles.dropdownItemDot, { [styles.selected]: item.id == selectedOptionId })}>• </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
