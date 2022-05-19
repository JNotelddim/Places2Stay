import React from 'react';
import {Animated, View} from 'react-native';

import {CardDragBar} from 'component/base';

import styles from './OverlaidCard.style';
import {OverlaidCardProps} from './OverlaidCard.type';

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
