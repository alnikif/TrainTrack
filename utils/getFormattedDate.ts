const getFormattedDate = (date: Date | string, locale?: string) => {
  const currentDate = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: locale || 'UTC',
  }
  const timeFormat = new Intl.DateTimeFormat(locale, options)

  return timeFormat.format(currentDate)
}

export default getFormattedDate
