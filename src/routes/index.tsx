import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Dashboard } from '../screens/Dashboard';
import { useTheme } from 'styled-components/native';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerTransparent: true,
        title: '',
      }}
    >
      <Screen name="home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="dashboard"
        component={Dashboard}
        options={{
          headerTintColor: theme.colors.greenDark,
        }}
      />
    </Navigator>
  );
}
