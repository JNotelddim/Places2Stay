import {StyleSheet} from 'react-native';

import {colors} from 'const';

const BAR_WIDTH = 30;
const BAR_HEIGHT = 2;

const style = StyleSheet.create({
  root: {
    height: BAR_HEIGHT,
    width: BAR_WIDTH,
    backgroundColor: colors.slateGrey,
  },
});

export default style;
