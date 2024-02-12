const getDateFormattedTime = (date: Date | string) => {
  const currentDate = new Date(date)
  const timeFormat = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })

  return timeFormat.format(currentDate)
}

export default getDateFormattedTime
