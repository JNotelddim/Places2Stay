import {StyleProp, ViewStyle} from 'react-native';

export interface CounterRowProps {
  title: string;
  description?: string;
  value: number;
  setValue: (newValue: number) => void;
  maximum?: number;
  minimum?: number;
  style?: StyleProp<ViewStyle>;
}
