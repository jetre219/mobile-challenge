import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux'


export const LoginScreen = ({ login }) => (
  <View style={styles.container}>
    <Button title="Login" onPress={login} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/* istanbul ignore next */
const mapDispatch = dispatch => ({
  login: dispatch.authentication.login,
});

export default connect(null, mapDispatch)(LoginScreen);
