export const getPrevDay = (date: Date) => {
  const prevDay = new Date(date)
  prevDay.setDate(date.getDate() - 1)
  return prevDay
}
