import 'react-native-gesture-handler';
import { View } from 'react-native';
import { AppRoutes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
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
