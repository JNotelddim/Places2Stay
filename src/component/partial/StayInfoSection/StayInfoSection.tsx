import {Text} from 'component/base';
import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

export interface StayInfoSectionProps {
  label: string;
  onMenuPress: () => void;
  infoRecord: Record<string, string | number>;
  style?: StyleProp<ViewStyle>;
}

const StayInfoSection: React.FC<StayInfoSectionProps> = ({
  label,
  //   onMenuPress,
  infoRecord,
  style,
}) => {
  const keys = Object.keys(infoRecord);
  return (
    <View style={[styles.container, style]}>
      <View style={styles.label}>
        <Text>{label}</Text>
      </View>

      {/**
       * TODO: menu icon
       */}

      {keys.map((key, index) => (
        <View
          key={key}
          style={[
            styles.infoRow,
            index !== keys.length - 1 && styles.marginBottom,
          ]}>
          <Text>{key}</Text>
          <Text>{infoRecord[key]}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E1Dfd8',
    borderRadius: 8,
    position: 'relative',
    paddingTop: 48,
    paddingBottom: 32,
    paddingHorizontal: 32,
  },
  label: {
    backgroundColor: '#4169E1',
    borderBottomRightRadius: 8,
    padding: 8,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  marginBottom: {
    marginBottom: 12,
  },
});

export default StayInfoSection;
