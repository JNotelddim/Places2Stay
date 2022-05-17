import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

interface TextProps extends RNTextProps {
  // TODO: support different typography
  variant?: string;
  color?: string;
}

/**
 * Text is a wrapper for the RN Text component which allows for some customization.
 */
export const Text: React.FC<TextProps> = ({style, color, children}) => {
  return <RNText style={[style, {color}]}>{children}</RNText>;
};

export default Text;
