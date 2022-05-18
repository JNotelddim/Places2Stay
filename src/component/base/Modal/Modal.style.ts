import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff77',
  },
  modalCard: {
    marginTop: '5%',
    height: '85%',
    width: '95%',
    borderRadius: 8,
    padding: 40,
    backgroundColor: 'white',
    opacity: 1,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
});

export default styles;
