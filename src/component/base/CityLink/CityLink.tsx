import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {colors} from 'const';
import {Text, Icon, Pressable} from 'component/base';
import {RootStackParamList, useModal} from 'component/provider';

import styles from './CityLink.style';
import {CityLinkProps} from './CityLink.type';

const CityLink: React.FC<CityLinkProps> = ({cityName}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {closeModal} = useModal();

  const goToStay = () => {
    navigation.navigate('Stay', {place: {cityName}});
    closeModal();
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
