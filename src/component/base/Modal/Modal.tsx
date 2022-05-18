import {useModal} from 'component/provider';
import React from 'react';
import {Modal as RNModal, View} from 'react-native';
import {IconButton, SearchInput} from 'component/base';
import styles from './Modal.style';

export interface ModalProps {}

const Modal: React.FC<ModalProps> = () => {
  const [searchVal, setSearchVal] = React.useState('');
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

          <SearchInput
            placeholder="Try 'Boston'"
            value={searchVal}
            onChangeText={setSearchVal}
          />
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
