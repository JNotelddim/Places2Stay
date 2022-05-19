import React from 'react';
import {View} from 'react-native';

import {Text, Icon} from 'component/base';
import {colors} from 'const';

import styles from './CityLink.style';
import {CityLinkProps} from './CityLink.type';
import {Link} from '@react-navigation/native';

const CityLink: React.FC<CityLinkProps> = ({cityName}) => {
  return (
    <Link to={{screen: 'Stay', params: {place: {cityName}}}}>
      <View style={styles.container}>
        <Icon name="locationPin" color={colors.blue} style={styles.icon} />
        <Text variant="body2">{cityName}</Text>
      </View>
    </Link>
  );
};

export default CityLink;
