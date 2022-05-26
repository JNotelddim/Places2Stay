import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Text} from 'component/base';
import {Pressable} from 'component/base/Pressable';

import styles from './WeekOption.style';
import {WeekendOptionProps} from './WeekOption.type';

const getMmDdDateString = (inputDate: Date) => {
  // ex/ Wed March 24 1998
  return inputDate
    .toDateString()
    .split(' ')
    .filter((v, index) => index === 1 || index === 2)
    .join(' ');
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
        <Icon name="calendar" size={36} style={styles.mainIcon} />
        <Text> {getMmDdDateString(startDate)} </Text>
        <Icon name="arrow-down" size={12} style={styles.smallIcon} />
        <Text>{getMmDdDateString(endDate)} </Text>
      </View>
    </Pressable>
  );
};

export default WeekendOption;
