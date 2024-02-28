import { useContext, useEffect, useState } from 'react'

import { DateContext } from '../../../providers/DateProvider'
import getFormattedDate from '../../../utils/getFormattedDate'

const HeaderDate = () => {
  const [isClient, setIsClient] = useState(false)

  const { dateRange } = useContext(DateContext)
  const startDate = getFormattedDate(dateRange.startDate)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return <div className="flex items-center cursor-default">{isClient ? startDate : ''}</div>
}

export default HeaderDate
