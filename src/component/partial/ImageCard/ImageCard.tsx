import React from 'react';
import {View, Image} from 'react-native';

import {Text} from 'component/base';
import {ImageCardProps} from './ImageCard.type';
import styles from './ImageCard.style';

const ImageCard: React.FC<ImageCardProps> = ({imageSource, label, style}) => {
  return (
    <View style={[styles.imageWrapper, style]}>
      {/** Image */}
      <Image style={styles.image} source={imageSource} />

      {/** Label */}
      <View style={styles.imageLabel}>
        <Text variant="body1"> {label} </Text>
      </View>
    </View>
  );
};

export default ImageCard;
