import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Dashboard } from '../screens/Dashboard';
import { useTheme } from 'styled-components/native';
import { NewMeal } from '../screens/NewMeal';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        title: '',
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 18,
          fontFamily: theme.font.family.bold,
        },
        headerLeftContainerStyle: {
          marginTop: 15,
        },
        headerTitleContainerStyle: {
          marginTop: 15,
        },
      }}
    >
      <Screen name="home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="dashboard"
        component={Dashboard}
        options={{
          headerTintColor: theme.colors.greenDark,
          headerTransparent: true,
        }}
      />
      <Screen
        name="newMeal"
        component={NewMeal}
        options={{
          title: 'Nova Refeição',
          headerStyle: {
            backgroundColor: theme.colors.gray500,
          },
        }}
      />
    </Navigator>
  );
}
