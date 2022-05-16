import React from 'react';

import {Text} from 'component/base';
import {StyleSheet, View} from 'react-native';

// SectionHeader.type.ts
interface SectionHeaderProps {
  heading: string;
  description: string;
}

// SectionHeader.tsx
const SectionHeader: React.FC<SectionHeaderProps> = ({
  heading,
  description,
}) => {
  return (
    <View>
      <Text
        style={[styles.heading1, styles.bottomMargin]}
        //TODO: variant="heading1"
      >
        {heading}
      </Text>

      <Text style={[styles.body1]}>{description}</Text>
    </View>
  );
};

// SectionHeader.style.ts
const styles = StyleSheet.create({
  heading1: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 29,
  },
  body1: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '400',
  },
  // TODO: convert ^ styles into Text component variants
  bottomMargin: {
    marginBottom: 8,
  },
});

export default SectionHeader;
