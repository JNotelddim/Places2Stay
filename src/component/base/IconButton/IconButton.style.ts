import {colors} from 'const';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 38,
    height: 38,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  opaqueStyle: {
    backgroundColor: colors.highOpacityWhite,
  },
});

export default styles;
