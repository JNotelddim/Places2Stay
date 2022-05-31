import {StyleProp, ViewStyle} from 'react-native';

import {Listing} from 'type/models.type';

export interface ListingCardProps extends Listing {
  style?: StyleProp<ViewStyle>;
}
