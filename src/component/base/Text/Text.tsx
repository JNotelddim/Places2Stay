import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

interface TextProps extends RNTextProps {}

/**
 * Text is a wrapper for the RN Text component which allows for some customization.
 */
export const Text: React.FC<TextProps> = props => {
  return <RNText {...props} />;
};

export default Text;
