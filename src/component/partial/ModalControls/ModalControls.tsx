import React from 'react';
import {View} from 'react-native';

import {IconButton} from 'component/base';
import {useModal} from 'component/provider';

import {ModalControlsProps} from './ModalControls.type';
import styles from './ModalControls.style';

/**
 * ModalControls is to be used at the top of any Modal component to provide a close (X) icon button.
 */
const ModalControls: React.FC<ModalControlsProps> = ({style, children}) => {
  const {closeModal} = useModal();

  return (
    <View style={[styles.topRow, style]}>
      {children}
      <IconButton
        accessibilityAction="Close Modal"
        name="close"
        onPress={closeModal}
      />
    </View>
  );
};

export default ModalControls;
