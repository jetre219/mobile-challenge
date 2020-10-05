import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

export const LoginScreen = ({ login }) => (
  <View style={styles.container}>
    <Button title="Login" onPress={login} titleStyle={styles.button} raised />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 22,
    marginHorizontal: 8,
  },
});

const mapDispatch = (dispatch) => ({
  login: dispatch.authentication.login,
});

export default connect(null, mapDispatch)(LoginScreen);
