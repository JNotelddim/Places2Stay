import {StyleSheet, TextStyle} from 'react-native';

import {variantStyles} from './Text.style';
import {TextVariant} from './Text.type';

export const getStylesFromProps = (variant: TextVariant, color?: string) => {
  let stylesObj: Record<string, unknown> = {
    ...variantStyles[variant],
  };

  if (color) {
    stylesObj.color = color as TextStyle;
  }

  return StyleSheet.create(stylesObj as StyleSheet.NamedStyles<TextStyle>);
};
