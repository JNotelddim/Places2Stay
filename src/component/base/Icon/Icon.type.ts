import {ImageStyle, StyleProp} from 'react-native';
import {iconSources} from './Icon';

export type IconOption = keyof typeof iconSources;

export interface IconProps {
  name: IconOption;
  // size, color, etc?
  size?: number;
  color?: string;
  style?: StyleProp<ImageStyle>;
}
