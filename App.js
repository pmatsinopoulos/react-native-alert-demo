/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const pressButtonHandler = () => {
    Alert.alert('Alert Title', 'Alert Message')
  }
  return (
    <View style={styles.ViewContainer}>
      <Button title="press" onPress={pressButtonHandler}/>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
