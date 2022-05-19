import {StyleProp, ViewStyle} from 'react-native';

export interface OverlaidCardProps {
  header: React.FC<unknown>;
  headerContainerStyles?: StyleProp<ViewStyle>;
  contentContainerStyles?: StyleProp<ViewStyle>;
}
