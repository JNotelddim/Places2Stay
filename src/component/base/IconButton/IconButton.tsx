import React from 'react';
import {Pressable, View} from 'react-native';
import {Icon} from 'component/base';

import {IconButtonProps} from './IconButton.type';
import styles from './IconButton.style';

const IconButton: React.FC<IconButtonProps> = ({onPress, name}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        {/* Does size need to be configurable? Let's not optimize early. */}
        <Icon name={name} size={24} />
      </View>
    </Pressable>
  );
};

export default IconButton;
