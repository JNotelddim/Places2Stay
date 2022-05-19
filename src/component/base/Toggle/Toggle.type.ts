import {StyleProp, ViewStyle} from 'react-native';

export interface ToggleProps {
  checked?: boolean;
  onChanged?: (isChecked: Boolean) => void;
  leftOptionText?: string;
  rightOptionText?: string;
  style?: StyleProp<ViewStyle>;
}
