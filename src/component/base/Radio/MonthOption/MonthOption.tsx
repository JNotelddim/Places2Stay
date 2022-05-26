import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Text} from 'component/base';
import {Pressable} from 'component/base/Pressable';

import styles from './MonthOption.style';
import {WeekendOptionProps} from './MonthOption.type';

const WeekendOption: React.FC<WeekendOptionProps> = ({
  selectedValue,
  onChange,
  value,
  valueComparatorKey = 'label',
}) => {
  const {label} = value;

  const isSelected =
    value[valueComparatorKey] === selectedValue?.[valueComparatorKey];

  const handlePress = () => {
    onChange?.(value);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.container, isSelected && styles.selected]}>
        <Icon name="calendar" size={36} style={styles.icon} />
        <Text variant="body2">{label}</Text>
      </View>
    </Pressable>
  );
};

export default WeekendOption;
