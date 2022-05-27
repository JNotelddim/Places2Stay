import {StackScreenProps} from '@react-navigation/stack';

import {UnauthenticatedStackParamList} from 'component/provider';

export type SignInScreenProps = StackScreenProps<
  UnauthenticatedStackParamList,
  'SignIn'
>;
