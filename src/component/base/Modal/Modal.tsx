import {useModal} from 'component/provider';
import React from 'react';
import {Modal as RNModal, View} from 'react-native';

import {IconButton, SearchInput, Text} from 'component/base';
import {CITIES} from 'const';

import styles from './Modal.style';

export interface ModalProps {}

const Modal: React.FC<ModalProps> = () => {
  const [searchVal, setSearchVal] = React.useState('');
  const {isModalOpen, closeModal} = useModal();

  const filteredCites = CITIES.filter(
    ({cityName}) => cityName.includes(searchVal) || searchVal === '',
  );

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

          {filteredCites.map(({cityName}) => (
            <Text key={cityName} variant="body1">
              {cityName}
            </Text>
          ))}
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
