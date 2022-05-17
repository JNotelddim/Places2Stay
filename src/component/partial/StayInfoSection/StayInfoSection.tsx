import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {Icon, Text} from 'component/base';
import {capitalizeText} from 'utils/text';

// StayInfoSection.type.ts
export interface StayInfoSectionProps {
  label: string;
  onMenuPress: () => void;
  infoRecord: Record<string, string | number>;
  style?: StyleProp<ViewStyle>;
}

/**
 * StayInfoSection ...
 */
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
        <Icon name="kebab" color="blue" style={styles.kebabIcon} />
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

// StayInfoSection.style.ts
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E1Dfd8',
    borderRadius: 8,
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    backgroundColor: '#4169E1',
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  kebabIcon: {
    marginTop: 16,
    marginRight: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    paddingTop: 18,
    paddingBottom: 32,
    paddingHorizontal: 32,
  },
  marginBottom: {
    marginBottom: 12,
  },
});

export default StayInfoSection;
