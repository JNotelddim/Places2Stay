import React from 'react';
import {Animated, View} from 'react-native';

import {Text, Pressable} from 'component/base';

import {ToggleProps} from './Toggle.type';
import styles from './Toggle.style';

const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChanged,
  leftOptionText = 'Off',
  rightOptionText = 'On',
  style,
}) => {
  const animated = React.useRef(new Animated.Value(checked ? 1 : 0)).current;

  const handleChange = (newVal: 0 | 1) => {
    Animated.timing(animated, {
      toValue: newVal,
      useNativeDriver: false,
    }).start();

    onChanged?.(Boolean(newVal));
  };

  return (
    <View style={[style, styles.container]}>
      <View style={styles.textRow}>
        <Pressable onPress={() => handleChange(0)}>
          <Text style={styles.textOption}>{leftOptionText}</Text>
        </Pressable>
        <Pressable onPress={() => handleChange(1)}>
          <Text style={styles.textOption}>{rightOptionText}</Text>
        </Pressable>
      </View>
      <Animated.View
        style={[
          styles.toggle,
          {
            marginLeft: animated.interpolate({
              inputRange: [0, 1],
              outputRange: ['6%', '56%'],
            }),
          },
        ]}
      />
    </View>
  );
};

export default Toggle;
