import React from 'react';
import {Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Text, Icon} from 'component/base';
import {colors} from 'const';
import {RootStackParamList} from 'component/root/AppRoot/AppRoot';

import styles from './CityLink.style';
import {CityLinkProps} from './CityLink.type';
import {useModal} from 'component/provider';

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
