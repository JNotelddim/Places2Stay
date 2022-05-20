import React from 'react';
import {View} from 'react-native';

import {colors} from 'const';
import {Text, Pressable} from 'component/base';

import {InputFacadeButtonProps} from './InputFacadeButton.type';
import styles from './InputFacadeButton.style';

const InputFacadeButton: React.FC<InputFacadeButtonProps> = ({
  title,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      accessible
      accessibilityLabel="Button for opening Search Modal. Tap to open.">
      <View style={styles.inputWrapper}>
        <Text variant="body1" color={colors.slateGrey} style={styles.input}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default InputFacadeButton;
