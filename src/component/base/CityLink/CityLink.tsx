import React from 'react';
import {View} from 'react-native';

import {Text, Icon} from 'component/base';
import {colors} from 'const';

import styles from './CityLink.style';
import {CityLinkProps} from './CityLink.type';

const CityLink: React.FC<CityLinkProps> = ({children}) => {
  return (
    <View style={styles.container}>
      <Icon name="locationPin" color={colors.blue} style={styles.icon} />
      <Text variant="body2">{children}</Text>
    </View>
  );
};

export default CityLink;
