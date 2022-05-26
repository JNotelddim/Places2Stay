import {Pressable} from 'component/base/Pressable';
import {Text} from 'component/base/Text';
import {colors, spacing} from 'const';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export interface RadioOptionProps {
  selectedValue?: any;
  value: any;
  onChange?: (newValue: string) => void;
  valueComparatorKey?: string;
}

const RadioOption: React.FC<RadioOptionProps> = ({
  selectedValue,
  onChange,
  children,
  value,
  valueComparatorKey,
}) => {
  const comparisonValue = valueComparatorKey
    ? value[valueComparatorKey]
    : value;
  const selectedComparisonValue =
    valueComparatorKey && selectedValue
      ? selectedValue[valueComparatorKey]
      : selectedValue;
  const isSelected = comparisonValue === selectedComparisonValue;

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

const styles = StyleSheet.create({
  container: {
    borderColor: colors.slateGrey,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: colors.white,
    paddingVertical: spacing.whitespace.small,
    paddingHorizontal: spacing.whitespace.medium,
    marginRight: spacing.whitespace.medium,
  },
  selected: {
    borderColor: colors.black,
  },
});

export default RadioOption;
