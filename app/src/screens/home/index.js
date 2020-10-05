import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text h4>Home Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
