import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

// Utils
const variantStyles = {
  heading1: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 29,
  },
  body1: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '400',
  },
};

const getVariantStyle = (variant?: TextVariant) => {
  if (!variant) {
    return {};
  }
  return variantStyles[variant];
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
const Text: React.FC<TextProps> = ({style, color, variant, children}) => {
  return (
    <RNText style={[style, {color}, {...getVariantStyle(variant)}]}>
      {children}
    </RNText>
  );
};

export default Text;
