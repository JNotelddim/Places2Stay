import React from 'react';
import {View} from 'react-native';

import {Pressable, Text} from 'component/base';

import styles from './RadioOption.style';
import {RadioOptionProps} from './RadioOption.type';

const RadioOption: React.FC<RadioOptionProps> = ({
  selectedValue,
  onChange,
  children,
  value,
}) => {
  const isSelected = value === selectedValue;

  const handlePress = () => {
    onChange?.(value);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.container, isSelected && styles.selected]}>
        {typeof children === 'string' ? <Text>{children}</Text> : {children}}
      </View>
    </Pressable>
  );
};

export default RadioOption;
