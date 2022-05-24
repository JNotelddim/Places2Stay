import React from 'react';
import {View} from 'react-native';

import {colors} from 'const';
import {IconButton, Text} from 'component/base';

import {CounterRowProps} from './CounterRow.type';
import styles from './CounterRow.style';

const CounterRow: React.FC<CounterRowProps> = ({
  title,
  description = 'description',
  value,
  setValue,
  maximum,
  minimum = 0,
  style,
}) => {
  const handleIncrement = () => {
    if (maximum === undefined || value < maximum) {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > minimum) {
      setValue(value - 1);
    }
  };

  return (
    <View style={[style, styles.wrapper]}>
      <View>
        <Text variant="heading2" style={styles.title}>
          {title}
        </Text>
        <Text color={colors.slateGrey}>{description}</Text>
      </View>
      <View style={styles.controlRow}>
        <IconButton name="minus" onPress={handleDecrement} outlined />
        <Text style={styles.controlValue}>{value}</Text>
        <IconButton name="plus" onPress={handleIncrement} outlined />
      </View>
    </View>
  );
};

export default CounterRow;
