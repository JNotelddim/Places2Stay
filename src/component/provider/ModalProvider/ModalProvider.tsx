import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {RootStackNavigation} from 'component/provider';

import {
  ModalContextType,
  ModalOption,
  ModalProviderProps,
} from './ModalProvider.type';

// Consts
const initNoOpFn = () => {
  console.error(
    "If you're seeing this, there was an error initializing the ModalContext.",
  );
};

// Context
const ModalContext = React.createContext<ModalContextType>({
  currentModal: undefined,
  openModal: initNoOpFn,
  closeModal: initNoOpFn,
});

// Component
const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
  const navigation = useNavigation<RootStackNavigation>();
  const [currentModal, setCurrentModal] = React.useState<
    ModalOption | undefined
  >(undefined);

  const openModal = (modalName: ModalOption) => {
    setCurrentModal(modalName);
    navigation.navigate('Modal', {name: 'CitySearch'});
  };

  const closeModal = () => {
    setCurrentModal(undefined);
    navigation.canGoBack() && navigation.goBack();
  };

  return (
    <ModalContext.Provider value={{currentModal, openModal, closeModal}}>
      {children}
    </ModalContext.Provider>
  );
};

// Export custom hook for consuming the context
export const useModal = () => {
  const value = useContext(ModalContext);
  return value;
};

export default ModalProvider;
