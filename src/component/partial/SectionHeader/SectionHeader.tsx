import React from 'react';

import {Text} from 'component/base';
import {StyleSheet, View} from 'react-native';

// SectionHeader.type.ts
interface SectionHeaderProps {
  heading: string;
  description?: string;
}

// SectionHeader.tsx
const SectionHeader: React.FC<SectionHeaderProps> = ({
  heading,
  description,
}) => {
  return (
    <View>
      <Text style={styles.bottomMargin} variant="heading1">
        {heading}
      </Text>

      {description && <Text variant="body1">{description}</Text>}
    </View>
  );
};

// SectionHeader.style.ts
const styles = StyleSheet.create({
  bottomMargin: {
    marginBottom: 8,
  },
});

export default SectionHeader;
