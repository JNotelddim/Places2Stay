import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF1D2',
  },
  headerImage: {
    width: Dimensions.get('screen').width,
    height: 300,
  },
  content: {
    paddingVertical: 50,
    paddingHorizontal: 40,
  },
  bodyText: {
    marginBottom: 8,
  },
  marginedInfoSection: {
    marginTop: 24,
    marginBottom: 32,
  },
});

export default styles;
