import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './src/screen/HomeScreen';
import { GameSettingScreen } from './src/screen/GameSettingScreen';
import { AppSettingScreen } from './src/screen/AppSettingScreen';
import { HistoryScreen } from './src/screen/HistoryScreen';
import { GameScreen } from './src/screen/GameScreen';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="GameSetting" component={GameSettingScreen} />
          <Stack.Screen name="Game" component={GameScreen} />

          <Stack.Screen name="AppSetting" component={AppSettingScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
