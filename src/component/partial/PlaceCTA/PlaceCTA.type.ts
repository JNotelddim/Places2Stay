import {ImageSourcePropType, ImageStyle, StyleProp} from 'react-native';

export interface PlaceCTAProps {
  imageSource: ImageSourcePropType;
  label: string;
  address?: string;
  placename?: string;
  location: string;
  style?: StyleProp<ImageStyle>;
}
