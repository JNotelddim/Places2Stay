import {TextProps as RNTextProps} from 'react-native';

import {variantStyles} from './Text.style';

export type TextVariant = keyof typeof variantStyles;

export interface TextProps extends RNTextProps {
  variant?: TextVariant;
  color?: string;
}
