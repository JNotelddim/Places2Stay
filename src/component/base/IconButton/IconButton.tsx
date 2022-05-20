import React from 'react';
import {View} from 'react-native';

import {Icon, Pressable} from 'component/base';

import {IconButtonProps} from './IconButton.type';
import styles from './IconButton.style';

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  name,
  style,
  color,
  accessibilityAction,
  opaque,
  iconSize = 24,
}) => (
  <Pressable
    onPress={onPress}
    style={style}
    accessibilityLabel={`Icon Button. ${accessibilityAction}. Tap to perform action.`}>
    <View style={[styles.container, opaque && styles.opaqueStyle]}>
      <Icon name={name} size={iconSize} color={color} />
    </View>
  </Pressable>
);

export default IconButton;
