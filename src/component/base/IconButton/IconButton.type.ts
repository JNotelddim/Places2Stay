import {IconOption} from 'component/base';
import {StyleProp, ViewStyle} from 'react-native';

export interface IconButtonProps {
  onPress: () => void;
  name: IconOption;
  style?: StyleProp<ViewStyle>;
  accessibilityAction?: string;
  color?: string;
}
