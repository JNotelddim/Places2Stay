import React from 'react';
import {Pressable, View} from 'react-native';
import {Icon} from 'component/base';

import {IconButtonProps} from './IconButton.type';
import styles from './IconButton.style';

const IconButton: React.FC<IconButtonProps> = ({onPress, name, style}) => {
  // TODO: animate opacity on Pressable / Animated.View
  // https://stackoverflow.com/questions/68413202/react-native-how-to-add-opacity-feedback-to-pressable-component

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, style]}>
        {/* Does size need to be configurable? Let's not optimize early. */}
        <Icon name={name} size={24} />
      </View>
    </Pressable>
  );
};

export default IconButton;
