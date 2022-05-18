import React, {useContext} from 'react';

import Modal from 'component/base/Modal';

// ModalProvider.type.ts
export interface ModalProviderProps {}

// ModalProvider consts
const initNoOpFn = () => {
  console.error(
    "If you're seeing this, there was an error initializing the ModalContext.",
  );
};

const ModalContext = React.createContext({
  isModalOpen: false,
  openModal: initNoOpFn,
  closeModal: initNoOpFn,
});

// Component
const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{isModalOpen, openModal, closeModal}}>
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};

// Exports
export const useModal = () => {
  const value = useContext(ModalContext);
  return value;
};

export default ModalProvider;
