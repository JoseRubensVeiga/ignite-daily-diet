import 'react-native-gesture-handler';
import { AppRoutes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  useFonts,
  Nunito_700Bold,
  Nunito_400Regular,
} from '@expo-google-fonts/nunito';
import { Loading } from '@components/Loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Platform, StatusBar } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor="transparent"
          translucent
        />
        <AppRoutes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
