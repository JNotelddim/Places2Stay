import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Text} from 'component/base';
import {Pressable} from 'component/base/Pressable';

import styles from './TimeDurationOption.style';
import {TimeDurationOptionProps} from './TimeDurationOption.type';

const getMonthString = (inputDate: Date) => {
  // Wed March 24 1998
  return inputDate.toDateString().split(' ')[1];
};

const getMmDdDateString = (inputDate: Date) => {
  // ex/ Wed March 24 1998
  return inputDate
    .toDateString()
    .split(' ')
    .filter((v, index) => index === 1 || index === 2)
    .join(' ');
};

const TimeDurationOption: React.FC<TimeDurationOptionProps> = ({
  selectedValue,
  onChange,
  value,
  valueComparatorKey = 'label',
  durationType,
}) => {
  const {startDate, endDate, label} = value;

  const isSelected =
    value[valueComparatorKey] === selectedValue?.[valueComparatorKey];

  const handlePress = () => {
    onChange?.(value);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.container, isSelected && styles.selected]}>
        <Icon name="calendar" size={36} style={styles.mainIcon} />
        {durationType === 'Weekend' && (
          <>
            <Text variant="body2">{getMonthString(startDate)}</Text>
            <Text style={styles.datesText}>
              {startDate.getDate()}, {endDate.getDate()}
            </Text>
          </>
        )}
        {durationType === 'Week' && (
          <>
            <Text> {getMmDdDateString(startDate)} </Text>
            <Icon name="arrow-down" size={12} style={styles.smallIcon} />
            <Text>{getMmDdDateString(endDate)} </Text>
          </>
        )}
        {durationType === 'Month' && <Text variant="body2">{label}</Text>}
      </View>
    </Pressable>
  );
};

export default TimeDurationOption;
