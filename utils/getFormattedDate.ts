const getFormattedDate = (date: Date | string, locale: string | undefined = 'UTC') => {
  const currentDate = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: locale,
  }
  const timeFormat = new Intl.DateTimeFormat(locale, options)

  return timeFormat.format(currentDate)
}

export default getFormattedDate
