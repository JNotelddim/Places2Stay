import {useModal} from 'component/provider';
import React from 'react';
import {Modal as RNModal, View} from 'react-native';
import {Text, IconButton} from 'component/base';
import styles from './Modal.style';

export interface ModalProps {}

const Modal: React.FC<ModalProps> = () => {
  const {isModalOpen, closeModal} = useModal();

  return (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={isModalOpen}
      onRequestClose={closeModal}>
      <View style={styles.overlay}>
        <View style={styles.modalCard}>
          <IconButton name="close" onPress={closeModal} />

          <Text>Modal</Text>
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
