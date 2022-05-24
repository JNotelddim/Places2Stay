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
