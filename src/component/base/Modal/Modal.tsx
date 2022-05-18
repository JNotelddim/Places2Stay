import {useModal} from 'component/provider';
import React from 'react';
import {
  Button,
  Dimensions,
  Modal as RNModal,
  StyleSheet,
  View,
} from 'react-native';
import Text from '../Text';

export interface ModalProps {}

const Modal: React.FC<ModalProps> = () => {
  const {isModalOpen, closeModal} = useModal();

  return (
    <RNModal
      animationType="slide"
      transparent={false}
      visible={isModalOpen}
      onRequestClose={closeModal}>
      <View style={styles.container}>
        <Button title="close" onPress={closeModal} />
        <Text>Modal</Text>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
});

export default Modal;
