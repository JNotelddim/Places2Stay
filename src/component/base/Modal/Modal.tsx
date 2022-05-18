import {useModal} from 'component/provider';
import React from 'react';
import {
  Button,
  Dimensions,
  Modal as RNModal,
  StyleSheet,
  View,
} from 'react-native';
import {Icon, Text} from 'component/base';

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
          <Button title="close" onPress={closeModal} />
          {/** TODO: IconButton */}
          <Icon name="close" size={24} />

          <Text>Modal</Text>
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff77',
  },
  modalCard: {
    marginTop: '5%',
    height: '85%',
    width: '95%',
    borderRadius: 8,
    padding: 40,
    backgroundColor: 'white',
    opacity: 1,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});

export default Modal;
