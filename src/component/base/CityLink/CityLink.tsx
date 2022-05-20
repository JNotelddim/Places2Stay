import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {colors} from 'const';
import {Text, Icon, Pressable} from 'component/base';
import {RootStackNavigation} from 'component/provider';

import styles from './CityLink.style';
import {CityLinkProps} from './CityLink.type';

const CityLink: React.FC<CityLinkProps> = ({cityName}) => {
  const navigation = useNavigation<RootStackNavigation>();

  const goToStay = () => {
    navigation.navigate('Stay', {place: {cityName}});
  };

  return (
    <Pressable onPress={goToStay}>
      <View style={styles.container}>
        <Icon name="locationPin" color={colors.blue} style={styles.icon} />
        <Text variant="body2">{cityName}</Text>
      </View>
    </Pressable>
  );
};

export default CityLink;
