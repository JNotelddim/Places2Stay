import React from 'react';
import VectorImage from 'react-native-vector-image';
import {ImageStyle, StyleProp} from 'react-native';

import homeSvg from 'asset/home.svg';
import calendarSvg from 'asset/calendar.svg';
import kebabSvg from 'asset/kebab.svg';

// Icon.type.ts
export interface IconProps {
  name: 'home' | 'calendar' | 'kebab';
  // size, color, etc?
  color?: string;
  style?: StyleProp<ImageStyle>;
}

// Icon.util.ts
const getSourceByName = (name: string) => {
  switch (name) {
    case 'home':
      return homeSvg;
    case 'calendar':
      return calendarSvg;
    case 'kebab':
      return kebabSvg;
    default:
      return null;
  }
};

const getColorStyle = (color?: string) => {
  return {
    tintColor: color || ':',
  };
};

/**
 * Icon is a simple component for rendering predefined svg images.
 * In order for the svg asset to be included in the build, you've got to `npm run icon:generate`.
 * So remember to rerun that and clean+rebuild every time you add a new icon/svg asset!
 */
const Icon: React.FC<IconProps> = ({name, color, style, ...other}) => {
  return (
    <VectorImage
      style={[style, getColorStyle(color)]}
      {...other}
      source={getSourceByName(name)}
    />
  );
};

export default Icon;
