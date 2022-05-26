import {DurationOption} from 'type/dates.type';

export interface WeekendOptionProps {
  selectedValue?: DurationOption;
  value: DurationOption;
  onChange?: (newValue: DurationOption) => void;
  valueComparatorKey?: keyof DurationOption;
}
