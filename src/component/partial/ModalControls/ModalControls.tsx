import React from 'react';
import {View} from 'react-native';

import {IconButton} from 'component/base';

import {ModalControlsProps} from './ModalControls.type';
import styles from './ModalControls.style';
import {useNavigation} from '@react-navigation/native';

/**
 * ModalControls is to be used at the top of any Modal component to provide a close (X) icon button.
 */
const ModalControls: React.FC<ModalControlsProps> = ({style, children}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.topRow, style]}>
      {children}
      <IconButton
        accessibilityAction="Close Modal"
        name="close"
        onPress={() => {
          navigation.canGoBack() && navigation.goBack();
        }}
      />
    </View>
  );
};

export default ModalControls;
