const getDateFormattedTime = (date: Date | string) => {
  const currentDate = new Date(date)
  const timeFormat = new Intl.DateTimeFormat('pl-PL', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })

  return timeFormat.format(currentDate)
}

export default getDateFormattedTime
