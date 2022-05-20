import {StyleSheet} from 'react-native';

import {colors} from 'const';

const SIZE = 38;
const styles = StyleSheet.create({
  container: {
    // TODO: handle configurable size
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  opaqueStyle: {
    backgroundColor: colors.highOpacityWhite,
  },
});

export default styles;
