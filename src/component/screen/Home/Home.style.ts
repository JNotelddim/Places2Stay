import {colors} from 'const';
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    position: 'relative',
  },
  wrapper: {
    // paddingTop: 80,
    paddingTop: 180,
    paddingBottom: 40,
    paddingHorizontal: 50,
    backgroundColor: colors.paleYellow,
    height: '100%', // why doesn't flex: 1  have the same effect?
  },
  fixedHeader: {
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
    backgroundColor: colors.highOpacityPaleYellow,
    position: 'absolute',
    top: 0,
    zIndex: 2,

    width: '100%',
  },
  imageCard: {
    marginTop: 24,
    marginBottom: 40,
  },
  carousel: {
    marginTop: 16,
    marginBottom: 40,
    paddingLeft: 50,
    marginLeft: -50,
    width: Dimensions.get('screen').width,
  },
  cta: {
    marginVertical: 12,
  },
});

export default styles;
