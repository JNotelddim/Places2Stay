import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 40,
    paddingHorizontal: 50,
    backgroundColor: '#FFF1D2',
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
