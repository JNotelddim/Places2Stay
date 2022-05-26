import React from 'react';
import {StyleSheet, View} from 'react-native';

export interface RadioProps {
  value: string;
  onChange: (newValue: string) => void;
}

const Radio: React.FC<RadioProps> = ({
  children,
  value: controlVal,
  onChange,
}) => {
  const [value, setValue] = React.useState(controlVal);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <View style={styles.container}>
      {React.Children.map(children, (child: React.ReactElement<any>) => {
        return React.cloneElement(
          child,
          typeof child.type === 'function'
            ? {value, onPress: handleChange}
            : {},
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Radio;
