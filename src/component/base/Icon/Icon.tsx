import React from 'react';
import VectorImage from 'react-native-vector-image';

import closeSvg from 'asset/close.svg';
import homeSvg from 'asset/home.svg';
import calendarSvg from 'asset/calendar.svg';
import kebabSvg from 'asset/kebab.svg';

import {IconProps} from './Icon.type';

export const iconSources = {
  calendar: calendarSvg,
  close: closeSvg,
  home: homeSvg,
  kebab: kebabSvg,
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
      accessible
      accessibilityLabel={`Icon. ${name}.`}
      style={[style, getColorStyle(color), getSizeStyle(size)]}
      {...other}
      source={iconSources[name]}
    />
  );
};

export default Icon;
