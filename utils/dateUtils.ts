interface TodayDatePropsType {
  todayDate: Date
}

export const getTodaysMonthAndYear = ({ todayDate }: TodayDatePropsType) => {
  const today = todayDate
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }
  return new Intl.DateTimeFormat('UTC', options).format(today)
}
