import {useModal} from 'component/provider';
import React from 'react';
import {Modal as RNModal, View} from 'react-native';

import {IconButton} from 'component/base';

import styles from './Modal.style';

export interface ModalProps {}

const Modal: React.FC<ModalProps> = ({children}) => {
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
        <View style={styles.modalCard}>
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
