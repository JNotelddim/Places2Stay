import {StackScreenProps} from '@react-navigation/stack';

import {SearchStackParamList} from '../Search.type';

export type ResultsScreenProps = StackScreenProps<
  SearchStackParamList,
  'Results'
>;
