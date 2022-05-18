import {colors} from 'const';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: colors.white,
    paddingHorizontal: 6,
    paddingVertical: 18,
    marginBottom: 18,

    border: `1px solid ${colors.lowOpacityBlack}`,
    borderRadius: 100,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  input: {
    textAlign: 'center',
  },
});

export default styles;
