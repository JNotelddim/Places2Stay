import {modals} from 'component/base';

export interface ModalProviderProps {}

export type ModalOption = keyof typeof modals;

export interface ModalContextType {
  currentModal?: ModalOption;
  openModal: (modalName: ModalOption) => void | (() => void);
  closeModal: () => void;
}
