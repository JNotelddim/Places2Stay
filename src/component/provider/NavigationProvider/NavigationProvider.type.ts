import {StackNavigationProp} from '@react-navigation/stack';
import {ModalOption} from '../ModalProvider/ModalProvider.type';

export type RootStackParamList = {
  Home: undefined;
  Stay: {place: {cityName: string}};
  Modal: {name: ModalOption};
};

export type HomeTabsParamList = {
  Browse: undefined;
  Other: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
