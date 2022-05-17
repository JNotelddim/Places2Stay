import {StyleProp, ViewStyle} from 'react-native';
import {CityCardProps} from 'component/partial/CityCard';

export interface CarouselProps {
  items: Array<CityCardProps>;
  component: React.FC<CityCardProps>;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
