import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RegistrationScreen, LoginScreen } from 'screens';
import { TabNavigator } from 'components';
import { ThemeProvider } from 'contexts';

const MainStack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
          <MainStack.Screen name="registration" component={RegistrationScreen} />
          <MainStack.Screen name="login" component={LoginScreen} />
          <MainStack.Screen name="home" component={TabNavigator} />
        </MainStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
