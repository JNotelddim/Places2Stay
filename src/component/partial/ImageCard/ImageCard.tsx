import React from 'react';
import {View, Image} from 'react-native';

import {Text} from 'component/base';
import {ImageCardProps} from './ImageCard.type';
import styles from './ImageCard.style';

const ImageCard: React.FC<ImageCardProps> = ({
  imageSource,
  label,
  accessibilityLabel,
  style,
}) => {
  return (
    <View
      style={[styles.imageWrapper, style]}
      accessible
      accessibilityLabel={`Image, ${accessibilityLabel}. Label: ${label}.`}>
      <Image style={styles.image} source={imageSource} />

      <View style={styles.imageLabel}>
        <Text variant="body1"> {label} </Text>
      </View>
    </View>
  );
};

export default ImageCard;
