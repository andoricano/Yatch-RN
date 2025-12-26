import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { initialBoard } from '../module/board/yatch/YatchBoard';
import { YatchBoardManager } from '../module/board/yatch/YatchBoardManager';
import { YatchBoardLayout } from '../module/board/yatch/YatchBoardLayout';

export class HomeScreen extends React.Component<any> {
  handlePress = () => {
    console.log('버튼 눌림!');
  };
  boardManager = new YatchBoardManager(initialBoard);

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.buttonBox}>
          <Button title="Game" onPress={() => navigation.navigate('GameSetting')} />
          <Button title="Setting" onPress={() => navigation.navigate('AppSetting')} />
          <Button title="History" onPress={() => navigation.navigate('History')} />
        </View>
      </View>
    );
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#853535ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBox: {
    width: '70%',
    gap: 16,
  },
});