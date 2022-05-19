import {colors} from 'const';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 6,
    maxWidth: '100%',
    justifyContent: 'center',

    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: colors.paleGrey,
  },
  toggle: {
    backgroundColor: colors.paleGrey,
    height: 30,
    position: 'absolute',
    borderRadius: 15,
    top: 6,
    width: '44%',
    zIndex: -1,
  },
  textRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textOption: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    width: '50%',
  },
});

export default styles;
