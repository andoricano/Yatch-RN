import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { initialBoard } from '../module/board/yatch/YatchBoard';
import { YatchBoardManager } from '../module/board/yatch/YatchBoardManager';
import { YatchBoardLayout } from '../module/board/yatch/YatchBoardLayout';

export class HomeScreen extends React.Component {
  handlePress = () => {
    console.log('버튼 눌림!');
  };
  boardManager = new YatchBoardManager(initialBoard);

  render() {
    return (
      <View style={styles.container}>
        <YatchBoardLayout boardManager={this.boardManager}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',  
    backgroundColor: '#853535ff'
  },
});