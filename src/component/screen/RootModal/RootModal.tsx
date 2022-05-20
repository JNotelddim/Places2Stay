import React from 'react';

import {ModalProvider, useModal} from 'component/provider';
import {modals} from 'component/provider';

/**
 * RootModal aggregates the modals accros the application and handles them always
 * rendering on top of the main stack.
 */
const RootModal: React.FC<{}> = () => {
  {
    /* Oop... well this doesn't make sense does it XD */
  }
  const {currentModal} = useModal();

  return <ModalProvider>{currentModal && modals[currentModal]}</ModalProvider>;
};

export default RootModal;
