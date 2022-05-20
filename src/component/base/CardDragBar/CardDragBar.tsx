import React from 'react';
import {View} from 'react-native';

import {spacing} from 'const';
import {Pressable} from 'component/base';

import {CardDragBarProps} from './CardDragBar.type';
import styles from './CardDragBar.style';

/**
 * CardDragBar is meant for use in a Drawer/Card for indicating opportunity to move the component.
 */
const CardDragBar: React.FC<CardDragBarProps> = ({onPress, style}) => (
  <Pressable style={style} onPress={onPress} hitSlop={spacing.dragBarHitslop}>
    <View style={styles.root} />
  </Pressable>
);

export default CardDragBar;
