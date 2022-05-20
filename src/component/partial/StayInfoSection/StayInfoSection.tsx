import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Text} from 'component/base';
import {capitalizeText} from 'utils';

import {StayInfoSectionProps} from './StayInfoSection.type';
import styles from './StayInfoSection.style';

const StayInfoSection: React.FC<StayInfoSectionProps> = ({
  label,
  //   onMenuPress,
  infoRecord,
  style,
}) => {
  const keys = Object.keys(infoRecord);
  return (
    <View style={[styles.container, style]}>
      <View style={styles.topRow}>
        <View style={styles.label}>
          <Text color="white" variant="body1">
            {capitalizeText(label)}
          </Text>
        </View>

        {/* TODO: IconButton / some form of being clickable */}
        <Icon
          name="more-horizontal"
          color="blue"
          style={styles.kebabIcon}
          size={16}
        />
      </View>

      <View style={styles.content}>
        {keys.map((key, index) => (
          <View
            key={key}
            style={[
              styles.infoRow,
              index !== keys.length - 1 && styles.marginBottom,
            ]}>
            <Text>{capitalizeText(key)}</Text>
            <Text>{infoRecord[key]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default StayInfoSection;
