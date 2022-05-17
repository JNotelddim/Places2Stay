import React from 'react';
import {View} from 'react-native';

import {Text} from 'component/base';

import {SectionHeaderProps} from './SectionHeader.type';
import styles from './SectionHeader.style';

const SectionHeader: React.FC<SectionHeaderProps> = ({
  heading,
  description,
}) => {
  return (
    <View>
      <Text
        style={description ? styles.bottomMargin : styles.noMargin}
        variant="heading1">
        {heading}
      </Text>

      {description && <Text variant="body1">{description}</Text>}
    </View>
  );
};

export default SectionHeader;
