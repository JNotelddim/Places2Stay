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

export interface PlaceCTAProps {
  imageSource: ImageSourcePropType;
  label: string;
  address?: string;
  placename?: string;
  location: string;
  style?: StyleProp<ImageStyle>;
}

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
      <Text style={styles.smallText}> {address || placename} </Text>

      {/** Location */}
      <Text style={[styles.locationText, styles.smallText]}>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  smallText: {
    fontSize: 12,
    lineHeight: 15,
  },
  locationText: {
    color: '#858585',
    marginTop: 8,
  },
});

export default PlaceCTA;
