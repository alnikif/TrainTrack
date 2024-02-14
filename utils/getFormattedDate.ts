const getFormattedDate = (date: Date | string) => {
  const currentDate = new Date(date)
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }
  const timeFormat = new Intl.DateTimeFormat('en-US', options)

  return timeFormat.format(currentDate)
}

export default getFormattedDate
