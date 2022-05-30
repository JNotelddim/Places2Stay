import React from 'react';
import {ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {IconButton, Text} from 'component/base';
import {useMockDb} from 'component/provider';
import {SectionHeader} from 'component/partial';

import {NotificationModalProps} from './NotificationModal.type';
import styles from './NotificationModal.style';

const NotificationModal: React.FC<NotificationModalProps> = ({navigation}) => {
  const {notifications} = useMockDb();

  return (
    <View style={styles.container}>
      <IconButton
        name="chevron-left"
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />

      <SectionHeader heading="Notifications" style={styles.header} />

      <ScrollView>
        {notifications.map(({id, body}) => (
          <View key={id} style={styles.notificationWrapper}>
            <Icon name="bell" style={styles.icon} />
            <Text>{body}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationModal;
