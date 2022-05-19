import React from 'react';
import {Pressable, View} from 'react-native';
import {Icon} from 'component/base';

import {IconButtonProps} from './IconButton.type';
import styles from './IconButton.style';

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  name,
  style,
  color,
  accessibilityAction,
  opaque,
}) => {
  // TODO: animate opacity on Pressable / Animated.View
  // https://stackoverflow.com/questions/68413202/react-native-how-to-add-opacity-feedback-to-pressable-component

  return (
    <Pressable
      onPress={onPress}
      style={style}
      accessibilityLabel={`Icon Button. ${accessibilityAction}. Tap to perform action.`}>
      <View style={[styles.container, opaque && styles.opaqueStyle]}>
        {/* Does size need to be configurable? Let's not optimize early. */}
        <Icon name={name} size={24} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;
