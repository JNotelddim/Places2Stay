import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';

import {SectionHeader, StayInfoSection} from 'component/partial';
import {Text} from 'component/base';
import img from 'asset/stock-photo.jpg';

/**
 * Stay is the screen that a user is taken to when they click on a place to stay at.
 * ( That functionality isn't yet set up and they're currently navigated there just by clicking
 * on the other tab. )
 */
const Stay: React.FC = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <Image style={styles.headerImage} source={img} />

      <View style={styles.content}>
        <SectionHeader heading="408 St. Jacques | 1 Br" />

        <Text variant="smallText" style={styles.smallText}>
          Old Montreal, Montreal
        </Text>

        <Text variant="smallText" style={styles.smallText}>
          Oct.29, 2021 - Oct.31, 2021
        </Text>

        <StayInfoSection
          style={styles.marginedInfoSection}
          label="Access Codes"
          onMenuPress={() => {}}
          infoRecord={{building: 1012, unit: 466}}
        />

        <StayInfoSection
          label="Wifi"
          onMenuPress={() => {}}
          infoRecord={{name: 'HomeWifi', password: 'p@ssw0rd123'}}
        />
      </View>
    </ScrollView>
  );
};

// Stay.style.ts
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF1D2',
  },
  headerImage: {
    width: Dimensions.get('screen').width,
    height: 300,
  },
  content: {
    paddingVertical: 50,
    paddingHorizontal: 40,
  },
  smallText: {
    fontSize: 12,
    lineHeight: 15,
    color: '#858585',
    marginBottom: 8,
  },
  marginedInfoSection: {
    marginTop: 24,
    marginBottom: 32,
  },
});

export default Stay;
