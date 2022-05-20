import {Text} from 'component/base';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const NotificationModal: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default NotificationModal;
