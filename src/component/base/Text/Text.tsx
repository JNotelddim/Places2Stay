import React from 'react';
import {Text as RNText} from 'react-native';

import {TextProps} from './Text.type';
import {getStylesFromProps} from './Text.util';

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
