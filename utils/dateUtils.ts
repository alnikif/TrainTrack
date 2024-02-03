export const getTodaysMonthAndYear = () => {
  const today = new Date()
  const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' }
  return new Intl.DateTimeFormat('en-US', options).format(today)
}
