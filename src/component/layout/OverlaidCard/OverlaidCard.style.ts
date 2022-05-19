import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: Dimensions.get('screen').height,
  },
  header: {
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 50,
    height: '100%',
  },
  card: {
    padding: 50,
    paddingTop: 12,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    top: 150,
    bottom: 0,
    borderRadius: 16,
  },
  dragBar: {
    alignSelf: 'center',
    marginBottom: 38,
  },
});

export default styles;
