import React from 'react';
import VectorImage from 'react-native-vector-image';
import {ImageStyle, StyleProp} from 'react-native';

import closeSvg from 'asset/close.svg';
import homeSvg from 'asset/home.svg';
import calendarSvg from 'asset/calendar.svg';
import kebabSvg from 'asset/kebab.svg';

// Icon.type.ts
export interface IconProps {
  name: 'calendar' | 'close' | 'home' | 'kebab';
  // size, color, etc?
  size?: number;
  color?: string;
  style?: StyleProp<ImageStyle>;
}

// Icon.util.ts
const getSourceByName = (name: string) => {
  switch (name) {
    case 'calendar':
      return calendarSvg;
    case 'close':
      return closeSvg;
    case 'home':
      return homeSvg;
    case 'kebab':
      return kebabSvg;
    default:
      return null;
  }
};

const getColorStyle = (color?: string) => {
  return color
    ? {
        tintColor: color,
      }
    : {};
};

const getSizeStyle = (size?: number) => {
  return size
    ? {
        width: size,
        height: size,
      }
    : {};
};

/**
 * Icon is a simple component for rendering predefined svg images.
 * In order for the svg asset to be included in the build, you've got to `npm run icon:generate`.
 * So remember to rerun that and clean+rebuild every time you add a new icon/svg asset!
 */
const Icon: React.FC<IconProps> = ({name, color, size, style, ...other}) => {
  return (
    <VectorImage
      style={[style, getColorStyle(color), getSizeStyle(size)]}
      {...other}
      source={getSourceByName(name)}
    />
  );
};

export default Icon;
