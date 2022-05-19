import {Pressable} from 'component/base';
import {colors} from 'const';
import React from 'react';
import {Animated, StyleProp, View, ViewStyle} from 'react-native';

import styles from './OverlaidCard.style';
import {OverlaidCardProps} from './OverlaidCard.type';

interface CardDragBarProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const CardDragBar: React.FC<CardDragBarProps> = ({onPress, style}) => (
  <Pressable style={style} onPress={onPress} hitSlop={12}>
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: 2,
        width: 30,
        backgroundColor: colors.slateGrey,
      }}
    />
  </Pressable>
);

const OverlaidCard: React.FC<OverlaidCardProps> = ({
  header: Header,
  children,
  headerContainerStyles,
  contentContainerStyles,
}) => {
  const [isAnimated, setIsAnimated] = React.useState(false);
  const animated = React.useRef(new Animated.Value(0)).current;

  const handleCardTogglePress = () => {
    Animated.timing(animated, {
      toValue: isAnimated ? 0 : 1,
      useNativeDriver: false,
    }).start();
    setIsAnimated(!isAnimated);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, headerContainerStyles]}>
        <Header />
      </View>
      <Animated.View
        style={[
          styles.card,
          contentContainerStyles,
          {
            top: animated.interpolate({
              inputRange: [0, 1],
              outputRange: [150, 40],
            }),
          },
        ]}>
        <CardDragBar onPress={handleCardTogglePress} style={styles.dragBar} />
        {children}
      </Animated.View>
    </View>
  );
};

export default OverlaidCard;
