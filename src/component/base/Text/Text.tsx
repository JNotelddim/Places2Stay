import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

interface TextProps extends RNTextProps {}

export const Text: React.FC<TextProps> = props => {
  return <RNText {...props} />;
};

export default Text;
