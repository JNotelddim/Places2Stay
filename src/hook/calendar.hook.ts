import React from 'react';
import {DateData} from 'react-native-calendars';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';

import {colors} from 'const';
import {getDaysBetweenDates} from 'utils';

const EDGE_DAY_COLOR = colors.blue;
const EDGE_DAY_TEXT_COLOR = colors.white;
const FILL_DAY_COLOR = colors.midOpacityBlue;
const FILL_DAY_TEXT_COLOR = colors.white;

interface UseHandleCalendarRangeProps {
  startDate?: Date;
  endDate?: Date;
  calendarMarkedDays: {[key: string]: MarkingProps};
  setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setCalendarMarkedDays: React.Dispatch<
    React.SetStateAction<{[key: string]: MarkingProps}>
  >;
}

export const useHandleCalendarRange = ({
  startDate,
  endDate,
  calendarMarkedDays,
  setStartDate,
  setEndDate,
  setCalendarMarkedDays,
}: UseHandleCalendarRangeProps) => {
  /* Sorry this function in messy, I hope to come back to it later, but for now it's working and I don't want to fall behind */
  const handleCalendarDayPress = (day: DateData) => {
    let tempMarkedDays = {...calendarMarkedDays};
    let options: MarkingProps = {
      color: EDGE_DAY_COLOR,
      textColor: EDGE_DAY_TEXT_COLOR,
    };

    const isDateBeforeCurrentStart =
      startDate && new Date(day.dateString) < startDate;
    if ((startDate && endDate) || isDateBeforeCurrentStart) {
      // Clear out existing marked days if you're clicking a new start date;
      tempMarkedDays = {};
      setStartDate(new Date(day.dateString));
      setEndDate(undefined);
      options.startingDay = true;
    } else if (!startDate) {
      options.startingDay = true;
      setStartDate(new Date(day.dateString));
    } else if (!endDate) {
      options.endingDay = true;
      const newEndDate = new Date(day.dateString);
      setEndDate(newEndDate);

      // Fill in-between days:
      const daysBetween = getDaysBetweenDates(startDate, newEndDate);
      for (const betweenDay of daysBetween) {
        tempMarkedDays[betweenDay] = {
          color: FILL_DAY_COLOR,
          textColor: FILL_DAY_TEXT_COLOR,
        };
      }
    }

    setCalendarMarkedDays({...tempMarkedDays, [day.dateString]: options});
  };
  return {handleCalendarDayPress};
};
