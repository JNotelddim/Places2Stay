import {Text} from 'component/base';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';

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
      <View style={styles.imageWrapper}>
        {/** Image */}
        <Image style={styles.image} source={imageSource} />

        {/** Label */}
        <View style={styles.imageLabel}>
          <Text> {label} </Text>
        </View>
      </View>

      {/** Address / PlaceName */}
      <Text style={styles.smallText}> {address || placename} </Text>

      {/** Location */}
      <Text style={[styles.locationText, styles.smallText]}>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    // maxWidth: '100%',
  },
  image: {
    maxWidth: '100%',
    height: 150, // TODO: make this not hardcoded -- why doesn't auto work?
  },
  imageLabel: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FFA500',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 8,
  },
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
