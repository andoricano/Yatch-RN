import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { DiceWidget } from '../module/dice/DiceWidget';
import { DiceLayout } from '../module/dice/DiceLayout';

export class HomeScreen extends React.Component {
  handlePress = () => {
    console.log('버튼 눌림!');
  };

  render() {
    return (
      <View style={styles.container}>
        <DiceLayout width='90%' height='20%' oneLine = {false} />
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