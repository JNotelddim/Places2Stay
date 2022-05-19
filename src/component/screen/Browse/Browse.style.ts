import {colors} from 'const';
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 50,
    backgroundColor: colors.paleYellow,
    height: '100%', // why doesn't flex: 1  have the same effect?
  },
  cta: {
    marginVertical: 24,
  },
  carousel: {
    marginTop: 16,
    paddingLeft: 50,
    marginLeft: -50,
    width: Dimensions.get('screen').width,
  },
});

export default styles;
