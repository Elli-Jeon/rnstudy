import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   useColorScheme,
//   View,
// } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import About from './src/screens/About';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

// 새로 package 다운 받고 "npx pod install ios"

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// <StatusBar
//   barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//   backgroundColor={backgroundStyle.backgroundColor}
// />;

export default App;
