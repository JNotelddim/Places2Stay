import React from 'react';
import {Image, ScrollView, View} from 'react-native';

import img from 'asset/stock-photo.jpg';

import {colors} from 'const';
import {IconButton, Text, Toggle} from 'component/base';
import {SectionHeader, StayInfoSection} from 'component/partial';

import styles from './Stay.style';

import {StayScreenProps} from './Stay.type';
// import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
// import { RootStackParamList } from 'component/provider';

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

const Stay: React.FC<StayScreenProps> = ({navigation, route}) => {
  const {imageSource, heading, placeName, dates} = place;
  /**
   TODO: get info by city selected?
   */
  console.log({city: route.params.city});

  const handleGoBack = () => {
    navigation.goBack();
  };

  const onToggleChange = (newVal: Boolean) => {
    console.log('toggle isChecked:', newVal);
  };

  return (
    <ScrollView style={styles.wrapper}>
      <IconButton
        name="chevron-left"
        onPress={handleGoBack}
        style={styles.backButton}
        color={colors.black}
        opaque
      />
      <Image style={styles.headerImage} source={imageSource} />

      <View style={styles.content}>
        <SectionHeader heading={heading} />

        <Text variant="body1" style={styles.bodyText} color="#858585">
          {placeName}
        </Text>

        <Text variant="body1" style={styles.bodyText} color="#858585">
          {`${dates.startDate} - ${dates.endDate}`}
        </Text>

        <Toggle
          style={styles.toggle}
          leftOptionText="Calendar"
          rightOptionText="I'm Flexible"
          onChanged={onToggleChange}
        />

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
