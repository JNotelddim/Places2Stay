import {StyleProp, ViewStyle} from 'react-native';

export interface RadioProps {
  value: any;
  onChange: (newValue: any) => void;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
