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
  const place = {
    imageSource: img,
    heading: '408 St. Jacques | 1 Br',
    placeName: 'Old Montreal, Montreal',
    dates: {
      startDate: 'Oct.29, 2022',
      endDate: 'Oct.31, 2022',
    },
  };
  const {imageSource, heading, placeName, dates} = place;

  return (
    <ScrollView style={styles.wrapper}>
      <Image style={styles.headerImage} source={imageSource} />

      <View style={styles.content}>
        <SectionHeader heading={heading} />

        <Text variant="body1" style={styles.bodyText} color="#858585">
          {placeName}
        </Text>

        <Text variant="body1" style={styles.bodyText} color="#858585">
          {`${dates.startDate} - ${dates.endDate}`}
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
  bodyText: {
    marginBottom: 8,
  },
  marginedInfoSection: {
    marginTop: 24,
    marginBottom: 32,
  },
});

export default Stay;
