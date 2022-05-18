import {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';

export interface ImageCardProps {
  imageSource: ImageSourcePropType;
  label: string;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
}
