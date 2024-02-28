import { useContext, useEffect } from 'react'

import { DateContext } from '../../providers/DateProvider'

const TrainingSessionsChart = () => {
  const { setDateRange } = useContext(DateContext)

  useEffect(() => {
    setDateRange({ startDate: new Date(), endDate: null })
  }, [])
  return <div>Training session</div>
}

export default TrainingSessionsChart
