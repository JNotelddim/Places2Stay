import {StyleProp, ViewStyle} from 'react-native';

export interface IconButtonProps {
  onPress: () => void;
  name: string;
  style?: StyleProp<ViewStyle>;
  accessibilityAction?: string;
  color?: string;
  iconSize?: number;
  opaque?: boolean;
  outlined?: boolean;
}
