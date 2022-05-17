import {Text} from 'component/base';
import React from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import ImageCard from '../ImageCard';

// PlaceCTA.type.ts
export interface PlaceCTAProps {
  imageSource: ImageSourcePropType;
  label: string;
  address?: string;
  placename?: string;
  location: string;
  style?: StyleProp<ImageStyle>;
}

/**
 * PlaceCTA ...
 */
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

// PlaceCTA.style.ts
const styles = StyleSheet.create({
  locationText: {
    color: '#858585',
    marginTop: 8,
  },
});

export default PlaceCTA;
