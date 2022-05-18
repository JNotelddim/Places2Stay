import {StyleProp, TextInputProps, ViewStyle} from 'react-native';

export interface SearchInputProps extends TextInputProps {
  wrapperStyle?: StyleProp<ViewStyle>;
}
