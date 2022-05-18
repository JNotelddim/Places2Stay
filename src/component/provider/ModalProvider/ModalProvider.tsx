import React, {useContext} from 'react';

export interface ModalProviderProps {}

const ModalContext = React.createContext({
  isOpen: false,
  openModal: () => {
    console.error(
      'If youre seeing this, there was an error initializing the ModalContext.',
    );
  },
  closeModal: () => {
    console.error(
      'If youre seeing this, there was an error initializing the ModalContext.',
    );
  },
});

const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{isOpen, openModal, closeModal}}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const value = useContext(ModalContext);
  return value;
};

export default ModalProvider;
