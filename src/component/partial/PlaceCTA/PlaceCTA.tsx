import React from 'react';
import {View} from 'react-native';

import {Text} from 'component/base';
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
    <View style={style}>
      <ImageCard imageSource={imageSource} label={label} />

      {/** Address / PlaceName */}
      <Text variant="body1"> {address || placename} </Text>

      {/** Location */}
      <Text variant="body1" style={styles.locationText}>
        {location}
      </Text>
    </View>
  );
};

export default PlaceCTA;
