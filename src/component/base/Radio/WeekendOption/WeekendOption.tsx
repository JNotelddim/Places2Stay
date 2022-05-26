import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Pressable} from 'component/base/Pressable';

import styles from './WeekendOption.style';
import {WeekendOptionProps} from './WeekendOption.type';
import {Text} from 'component/base';

const getMmDdDateString = (inputDate: Date) => {
  // Wed March 24 1998
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
        <Text>
          {getMmDdDateString(startDate)}, {endDate.getDate()}
        </Text>
        <Icon name="calendar" size={24} />
      </View>
    </Pressable>
  );
};

export default WeekendOption;
