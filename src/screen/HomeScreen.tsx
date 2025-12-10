import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { DiceWidget } from '../module/dice/DiceWidget';
import { DiceLayout } from '../module/dice/DiceLayout';
import { BoardWidget } from '../module/board/yatch/BoardWidget';
import { initialBoard } from '../module/board/yatch/YatchBoard';
import { YatchBoardManager } from '../module/board/yatch/YatchBoardManager';

export class HomeScreen extends React.Component {
  handlePress = () => {
    console.log('버튼 눌림!');
  };
  boardManager = new YatchBoardManager(initialBoard);

  render() {
    return (
      <View style={styles.container}>
        <BoardWidget boardManager={this.boardManager} />
        {/* <DiceLayout width='90%' height='20%' oneLine = {false} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
});