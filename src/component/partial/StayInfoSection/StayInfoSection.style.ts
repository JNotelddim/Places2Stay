import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E1Dfd8',
    borderRadius: 8,
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    backgroundColor: '#4169E1',
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  kebabIcon: {
    marginTop: 16,
    marginRight: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    paddingTop: 18,
    paddingBottom: 32,
    paddingHorizontal: 32,
  },
  marginBottom: {
    marginBottom: 12,
  },
});

export default styles;
