import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';

export type Duration = 'Weekend' | 'Week' | 'Month';
export interface DurationOption {
  startDate: Date;
  endDate: Date;
  label: string;
}

export type MarkedDays = {
  [key: string]: MarkingProps;
};
