import {StyleSheet} from 'react-native';

import {spacing} from 'const';

const styles = StyleSheet.create({
  container: {},
  toggle: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: spacing.whitespace.large,
  },
  calendar: {
    borderRadius: 8,
  },
  buttonRow: {
    marginTop: spacing.whitespace.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radio: {
    marginVertical: spacing.whitespace.large,
  },
  overflowRadio: {
    marginHorizontal: -1 * spacing.whitespace.xlarge,
  },
  radioContent: {
    paddingHorizontal: spacing.whitespace.xlarge,
  },
  weekendRadioOption: {
    padding: 40,
    backgroundColor: 'red',
  },
});

export default styles;
