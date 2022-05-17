import {StyleProp, ViewStyle} from 'react-native';

export interface StayInfoSectionProps {
  label: string;
  onMenuPress: () => void;
  infoRecord: Record<string, string | number>;
  style?: StyleProp<ViewStyle>;
}
