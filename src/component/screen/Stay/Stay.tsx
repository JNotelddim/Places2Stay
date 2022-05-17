import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';

import {SectionHeader} from 'component/partial';
import {Text} from 'component/base';
import img from 'asset/stock-photo.jpg';

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

        {/* <StayInfoSection /> */}
      </View>
    </ScrollView>
  );
};

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
});

export default Stay;
