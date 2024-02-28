export enum WeekDay {
  Sunday = 'Sunday',
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
}
export const weekDays = Object.values(WeekDay)

export const getWeekDayFromDate = (date: Date) => weekDays[date.getDay()]
