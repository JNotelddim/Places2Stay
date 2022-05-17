import {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';

export interface ImageCardProps {
  imageSource: ImageSourcePropType;
  label: string;
  style?: StyleProp<ViewStyle>;
}
