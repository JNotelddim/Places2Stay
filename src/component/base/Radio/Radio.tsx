import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export interface RadioProps {
  value: any;
  onChange: (newValue: any) => void;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const Radio: React.FC<RadioProps> = ({
  children,
  value: controlVal,
  onChange,
  style,
  contentContainerStyle,
}) => {
  const [value, setValue] = React.useState(controlVal);

  const handleChange = (newValue: any) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[styles.container, style]}
      contentContainerStyle={contentContainerStyle}>
      {React.Children.map(children, (child: React.ReactNode) => {
        return React.cloneElement(child as React.ReactElement, {
          selectedValue: value,
          onChange: handleChange,
        });
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Radio;
