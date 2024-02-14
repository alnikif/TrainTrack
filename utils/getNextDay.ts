export const getNextDay = (date: Date) => {
  const nextDay = new Date(date)
  nextDay.setDate(date.getDate() + 1)
  return nextDay
}
