import React from 'react';
import {View} from 'react-native';

import {Pressable, Text} from 'component/base';
import {ImageCard} from 'component/partial';

import {PlaceCTAProps} from './PlaceCTA.type';
import styles from './PlaceCTA.style';

const PlaceCTA: React.FC<PlaceCTAProps> = ({
  imageSource,
  label,
  address,
  placename,
  location,
  style,
}) => {
  return (
    <Pressable onPress={() => console.log('Go To Place Screen')}>
      <View style={style}>
        <ImageCard imageSource={imageSource} label={label} />

        {/** Address / PlaceName */}
        <Text variant="body1"> {address || placename} </Text>

        {/** Location */}
        <Text variant="body1" style={styles.locationText}>
          {location}
        </Text>
      </View>
    </Pressable>
  );
};

export default PlaceCTA;
