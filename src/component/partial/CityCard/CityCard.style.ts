import {StyleSheet} from 'react-native';

import {spacing} from 'const';

const CARD_HEIGHT = 160;
const CARD_WIDTH = 120;

const styles = StyleSheet.create({
  wrapper: {
    marginRight: spacing.whitespace.large,
  },
  image: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    borderRadius: 8,
    marginBottom: 8,
  },
});
export default styles;
