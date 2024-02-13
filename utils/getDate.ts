export const getEndDate = ({ todayDate }: { todayDate: Date }) => {
  const endDate = new Date(todayDate.getTime())
  endDate.setDate(endDate.getDate())
  const year = endDate.getFullYear()
  const month = (endDate.getMonth() + 1).toString().padStart(2, '0')
  const day = endDate.getDate().toString().padStart(2, '0')
  const filteredEndDate = `${year}-${month}-${day}`
  console.log(filteredEndDate)
  return filteredEndDate
}
export const getTodayDate = ({ todayDate }: { todayDate: Date }) => {
  const year = todayDate.getFullYear()
  const month = (todayDate.getMonth() + 1).toString().padStart(2, '0')
  const day = todayDate.getDate().toString().padStart(2, '0')
  const currentDate = `${year}-${month}-${day}`
  console.log(currentDate)
  return currentDate
}
