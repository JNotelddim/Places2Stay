import React, {useContext} from 'react';

import {CitySearch} from 'component/modal';

import {
  ModalContextType,
  ModalOption,
  ModalProviderProps,
} from './ModalProvider.type';

// ModalProvider consts
export const modals = {
  CitySearch: <CitySearch />,
};

const initNoOpFn = () => {
  console.error(
    "If you're seeing this, there was an error initializing the ModalContext.",
  );
};

const ModalContext = React.createContext<ModalContextType>({
  currentModal: undefined,
  openModal: initNoOpFn,
  closeModal: initNoOpFn,
});

// Component
const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
  const [currentModal, setCurrentModal] = React.useState<
    ModalOption | undefined
  >(undefined);

  const openModal = (modalName: ModalOption) => {
    setCurrentModal(modalName);
  };

  const closeModal = () => {
    setCurrentModal(undefined);
  };

  return (
    <ModalContext.Provider value={{currentModal, openModal, closeModal}}>
      {children}
      {currentModal && modals[currentModal]}
    </ModalContext.Provider>
  );
};

// Export custom hook for consuming the context
export const useModal = () => {
  const value = useContext(ModalContext);
  return value;
};

export default ModalProvider;
