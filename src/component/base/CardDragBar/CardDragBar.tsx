import React from 'react';
import {View} from 'react-native';

import {Pressable} from 'component/base';

import {CardDragBarProps} from './CardDragBar.type';
import styles from './CardDragBar.style';

const CardDragBar: React.FC<CardDragBarProps> = ({onPress, style}) => (
  <Pressable style={style} onPress={onPress} hitSlop={12}>
    <View style={styles.root} />
  </Pressable>
);

export default CardDragBar;
