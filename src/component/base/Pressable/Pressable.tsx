import React from 'react';
import {
  Animated,
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
} from 'react-native';

export interface PressableProps extends RNPressableProps {}

/**
 * Pressable wraps the RN Pressable component and handles animating the opacity
 */
const Pressable: React.FC<PressableProps> = ({children, ...props}) => {
  const animated = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(animated, {
      toValue: 0.3,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };
  const handlePressOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  return (
    <RNPressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...props}>
      <Animated.View
        style={{
          opacity: animated,
        }}>
        {children}
      </Animated.View>
    </RNPressable>
  );
};

export default Pressable;
