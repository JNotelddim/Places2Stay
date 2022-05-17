import React from 'react';
import {
  ImageSourcePropType,
  View,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Text} from 'component/base';

interface ImageCardProps {
  imageSource: ImageSourcePropType;
  label: string;
  style?: StyleProp<ViewStyle>;
}

const ImageCard: React.FC<ImageCardProps> = ({imageSource, label, style}) => {
  return (
    <View style={[styles.imageWrapper, style]}>
      {/** Image */}
      <Image style={styles.image} source={imageSource} />

      {/** Label */}
      <View style={styles.imageLabel}>
        <Text> {label} </Text>
      </View>
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
});

export default ImageCard;
