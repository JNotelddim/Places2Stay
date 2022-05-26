import React from 'react';
import {Animated, View} from 'react-native';

import {CardDragBar} from 'component/base';

import styles from './OverlaidCard.style';
import {OverlaidCardProps} from './OverlaidCard.type';

const MIN_TOP_MARGIN = 40;
const MAX_TOP_MARGIN = 150;

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
          {
            top: animated.interpolate({
              inputRange: [0, 1],
              outputRange: [MAX_TOP_MARGIN, MIN_TOP_MARGIN],
            }),
          },
        ]}>
        <CardDragBar onPress={handleCardTogglePress} style={styles.dragBar} />
        <View style={contentContainerStyles}>{children}</View>
      </Animated.View>
    </View>
  );
};

export default OverlaidCard;
