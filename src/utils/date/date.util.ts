import {Duration, DurationOption} from 'type/dates.type';

export const formatDateForCalendarMarking = (input: Date) => {
  const ISOString = input.toISOString();
  const formatted = ISOString.slice(0, ISOString.indexOf('T'));
  return formatted;
};

export const getDaysBetweenDates = (startDate: Date, endDate: Date) => {
  var dateArray = [];
  var currentDate = new Date(startDate);
  // Start the day after the 'start' date (we only want the ones in between)
  currentDate.setDate(startDate.getDate() + 1);
  while (currentDate <= endDate) {
    dateArray.push(formatDateForCalendarMarking(new Date(currentDate)));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateArray;
};

export const getNextDayOfWeek = (
  dayOfWeek: number,
  relativeTo: Date = new Date(),
) => {
  var resultDate = new Date(relativeTo.getTime());

  resultDate.setDate(
    relativeTo.getDate() + ((7 + dayOfWeek - relativeTo.getDay()) % 7),
  );

  return resultDate;
};

export const getNextXWeekends = (howMany: number): DurationOption[] => {
  const weekends = [];
  const nearestWeekendStartDate = getNextDayOfWeek(5);

  const startDate = new Date();
  const endDate = new Date();
  for (let i = 0; i <= howMany; i++) {
    startDate.setDate(nearestWeekendStartDate.getDate() + 7 * i);
    endDate.setDate(nearestWeekendStartDate.getDate() + 7 * i + 1);
    weekends.push({
      startDate,
      endDate,
      label: `${startDate.toDateString()} => ${endDate.toDateString()}`,
    });
  }

  return weekends;
};
export const getNextXWeeks = (howMany: number): DurationOption[] => {
  const weeks = [];
  const nearestWeekStartDate = getNextDayOfWeek(0);

  const startDate = new Date();
  const endDate = new Date();
  for (let i = 0; i <= howMany; i++) {
    startDate.setDate(nearestWeekStartDate.getDate() + 7 * i);
    endDate.setDate(nearestWeekStartDate.getDate() + 7 * i + 6);
    weeks.push({
      startDate,
      endDate,
      label: `${startDate.toDateString()} => ${endDate.toDateString()}`,
    });
  }

  return weeks;
};
export const getNextXMonths = (howMany: number): DurationOption[] => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const today = new Date();
  const thisMonthIdx = today.getMonth();
  const nextXMonths = new Array(howMany).fill(undefined).map((v, index) => {
    const startDate = new Date(today.getFullYear(), today.getMonth());
    const endDate = new Date(today.getFullYear(), today.getMonth() + 1, -1);
    return {
      startDate,
      endDate,
      label: months[thisMonthIdx + index],
    };
  });
  return nextXMonths;
};

export const getDurationOptions = (durationSelection: Duration) => {
  switch (durationSelection) {
    case 'Weekend':
      const upcomingWeekends = getNextXWeekends(4);
      return upcomingWeekends;
    case 'Week':
      return getNextXWeeks(4);
    case 'Month':
      return getNextXMonths(4);
    default:
      return [];
  }
};
