import {Duration, DurationOption} from 'type/dates.type';

export interface TimeDurationOptionProps {
  selectedValue?: DurationOption;
  value: DurationOption;
  durationType: Duration;
  onChange?: (newValue: DurationOption) => void;
  valueComparatorKey?: keyof DurationOption;
}
