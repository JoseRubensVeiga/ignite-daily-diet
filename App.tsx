import 'react-native-gesture-handler';
import { View } from 'react-native';
import { AppRoutes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  useFonts,
  Nunito_700Bold,
  Nunito_400Regular,
} from '@expo-google-fonts/nunito';
import { Loading } from '@components/Loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (fontsLoaded) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <SafeAreaView style={{ flexGrow: 1 }}>
          <AppRoutes />
        </SafeAreaView>
      </NavigationContainer>
    </View>
  );
}
