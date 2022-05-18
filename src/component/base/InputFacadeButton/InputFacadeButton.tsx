import React from 'react';
import {Pressable, View} from 'react-native';

import {Text} from 'component/base';

import {InputFacadeButtonProps} from './InputFacadeButton.type';
import styles from './InputFacadeButton.style';

const InputFacadeButton: React.FC<InputFacadeButtonProps> = ({
  title,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.inputWrapper}>
        <Text variant="body1" color="#858585" style={styles.input}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default InputFacadeButton;
