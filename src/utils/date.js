import dayjs from 'dayjs'

export const fillterDate = function(date, format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(date).format(format)
}

export function isRunYear(year) {
  return 0 == year % 4 && (year % 100 != 0 || year % 400 == 0)
}

export function daysOfMonth(year, month) {
  switch (month) {
    case 1:
      return 31

    case 2:
      if (isRunYear(year)) {
        return 29
      } else {
        return 28
      }

    case 3:
      return 31

    case 4:
      return 30

    case 5:
      return 31

    case 6:
      return 30

    case 7:
      return 31

    case 8:
      return 31

    case 9:
      return 30

    case 10:
      return 31

    case 11:
      return 30

    case 12:
      return 31

    default:
      return null
  }
}
