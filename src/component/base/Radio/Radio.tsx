import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export interface RadioProps {
  value: any;
  onChange: (newValue: any) => void;
  style?: StyleProp<ViewStyle>;
}

const Radio: React.FC<RadioProps> = ({
  children,
  value: controlVal,
  onChange,
  style,
}) => {
  const [value, setValue] = React.useState(controlVal);

  const handleChange = (newValue: any) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <View style={[styles.container, style]}>
      <ScrollView horizontal>
        {React.Children.map(children, (child: React.ReactNode) => {
          return React.cloneElement(child as React.ReactElement, {
            selectedValue: value,
            onChange: handleChange,
          });
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Radio;
