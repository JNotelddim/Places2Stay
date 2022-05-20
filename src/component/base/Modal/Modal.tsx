import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {IconButton} from 'component/base';
import {useModal} from 'component/provider';

import styles from './Modal.style';

import {CitySearch} from 'component/modal';

export const modals = {
  CitySearch: <CitySearch />,
};

export interface ModalProps {
  cardStyles?: StyleProp<ViewStyle>;
}

const Modal: React.FC<ModalProps> = ({}) => {
  const {currentModal, closeModal} = useModal();

  return (
    <View>
      <View style={styles.topRow}>
        <IconButton
          accessibilityAction="Close Modal"
          name="close"
          onPress={closeModal}
        />
      </View>

      {currentModal && modals[currentModal]}
    </View>
  );
};

export default Modal;
