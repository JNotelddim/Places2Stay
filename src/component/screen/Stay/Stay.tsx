import React from 'react';
import {Image, ScrollView, View} from 'react-native';

import {SectionHeader, StayInfoSection} from 'component/partial';
import {IconButton, Text} from 'component/base';
import img from 'asset/stock-photo.jpg';
import styles from './Stay.style';
import {useNavigation} from '@react-navigation/native';
import {colors} from 'const';

/**
 * Stay is the screen that a user is taken to when they click on a place to stay at.
 * ( That functionality isn't yet set up and they're currently navigated there just by clicking
 * on the other tab. )
 */
const place = {
  imageSource: img,
  heading: '408 St. Jacques | 1 Br',
  placeName: 'Old Montreal, Montreal',
  dates: {
    startDate: 'Oct.29, 2022',
    endDate: 'Oct.31, 2022',
  },
};
const Stay: React.FC = () => {
  const {imageSource, heading, placeName, dates} = place;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.wrapper}>
      <Image style={styles.headerImage} source={imageSource} />
      {/* TODO: replace icon with <  */}
      <IconButton
        name="close"
        onPress={handleGoBack}
        style={styles.backButton}
        color={colors.black}
      />

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

export default Stay;
