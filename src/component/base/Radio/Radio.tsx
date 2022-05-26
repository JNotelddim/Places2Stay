import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import styles from './Radio.style';

import {RadioProps} from './Radio.type';

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

export default Radio;
