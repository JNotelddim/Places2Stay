import React from 'react';
import {Modal as RNModal, StyleProp, View, ViewStyle} from 'react-native';

import {IconButton} from 'component/base';
import {useModal} from 'component/provider';

import styles from './Modal.style';

export interface ModalProps {
  cardStyles?: StyleProp<ViewStyle>;
}

const Modal: React.FC<ModalProps> = ({children, cardStyles}) => {
  const {currentModal, closeModal} = useModal();

  return (
    <RNModal
      accessible
      accessibilityLabel="Modal Card."
      animationType="slide"
      transparent={true}
      visible={!!currentModal}
      onRequestClose={closeModal}>
      <View style={styles.overlay}>
        <View style={[styles.modalCard, cardStyles]}>
          <View style={styles.topRow}>
            <IconButton
              accessibilityAction="Close Modal"
              name="close"
              onPress={closeModal}
            />
          </View>

          {children}
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
