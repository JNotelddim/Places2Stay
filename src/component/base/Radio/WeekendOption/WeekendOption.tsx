import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Pressable} from 'component/base/Pressable';

import styles from './WeekendOption.style';
import {WeekendOptionProps} from './WeekendOption.type';
import {Text} from 'component/base';

const getMonthString = (inputDate: Date) => {
  // Wed March 24 1998
  return inputDate.toDateString().split(' ')[1];
};

const WeekendOption: React.FC<WeekendOptionProps> = ({
  selectedValue,
  onChange,
  value,
  valueComparatorKey = 'label',
}) => {
  const {startDate, endDate} = value;

  const isSelected =
    value[valueComparatorKey] === selectedValue?.[valueComparatorKey];

  const handlePress = () => {
    onChange?.(value);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.container, isSelected && styles.selected]}>
        <Icon name="calendar" size={36} style={styles.icon} />
        <Text variant="body2">{getMonthString(startDate)}</Text>
        <Text>
          {startDate.getDate()}, {endDate.getDate()}
        </Text>
      </View>
    </Pressable>
  );
};

export default WeekendOption;
