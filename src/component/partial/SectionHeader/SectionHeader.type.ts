import {StyleProp, ViewStyle} from 'react-native';

export interface SectionHeaderProps {
  heading: string;
  description?: string;
  style?: StyleProp<ViewStyle>;
}
