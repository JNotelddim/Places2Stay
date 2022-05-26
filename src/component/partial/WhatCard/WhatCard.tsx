import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {colors} from 'const';
import {Pressable, Text} from 'component/base';
import styles from './WhatCard.style';

import {WhatCardProps} from './WhatCard.type';

const WhatCard: React.FC<WhatCardProps> = ({
  onPress,
  title,
  description,
  iconName,
}) => (
  <Pressable onPress={onPress}>
    <View style={styles.card}>
      <View>
        <Text variant="heading2">{title}</Text>
        <Text color={colors.slateGrey}>{description} </Text>
      </View>
      <View style={styles.iconWrapper}>
        <Icon name={iconName} size={40} />
      </View>
    </View>
  </Pressable>
);

export default WhatCard;
