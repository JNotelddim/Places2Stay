import React from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

// Utils
const variantStyles = {
  heading1: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '400',
    fontFamily: 'Bitter',
  },
  body1: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '400',
    fontFamily: 'Encode Sans',
  },
};

const getStylesFromProps = (variant: TextVariant, color?: string) => {
  let stylesObj: Record<string, unknown> = {
    ...variantStyles[variant],
  };

  if (color) {
    stylesObj.color = color as TextStyle;
  }

  return StyleSheet.create(stylesObj as StyleSheet.NamedStyles<TextStyle>);
};

// Text.type.ts
type TextVariant = keyof typeof variantStyles;
interface TextProps extends RNTextProps {
  variant?: TextVariant;
  color?: string;
}

/**
 * Text is a wrapper for the RN Text component which allows for some customization.
 */
const Text: React.FC<TextProps> = ({
  style,
  color,
  variant = 'body1',
  children,
}) => {
  const stylesFromProps = getStylesFromProps(variant, color);

  return (
    <RNText accessible style={[style, stylesFromProps]}>
      {children}
    </RNText>
  );
};

export default Text;
