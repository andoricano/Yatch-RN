import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { DiceWidget } from '../module/dice/DiceWidget';

export class HomeScreen extends React.Component {
  handlePress = () => {
    console.log('버튼 눌림!');
  };

  render() {
    return (
      <View style={styles.container}>
        <DiceWidget/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});