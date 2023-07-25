import { PercentageInformation } from '@components/PercentageInformation';
import {
  PercentageInformationContainer,
  OpenImage,
  MealsContainer,
  MealTitle,
  DailyMealContainer,
  DailyMealTitle,
  DailyMealItem,
  DailyMealHour,
  DailyMealSeparator,
  DailyMealDescription,
  DailyMealCircleStatus,
} from './styles';
import { Header } from '@components/Header';
import { useTheme } from 'styled-components/native';
import openImage from '@assets/open.png';
import { Button } from '@components/Button';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { statusBarHeight } from '../../utils/status-bar-height';

export function Home() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleGoToDashboard() {
    navigation.navigate('dashboard');
  }

  return (
    <ScrollView
      style={{ paddingHorizontal: 20, paddingTop: statusBarHeight + 15 }}
    >
      <Header />

      <PercentageInformationContainer
        bgColor={theme.colors.greenLight}
        onPress={handleGoToDashboard}
      >
        <OpenImage source={openImage} />
        <PercentageInformation />
      </PercentageInformationContainer>

      <MealsContainer>
        <MealTitle>Refeições</MealTitle>

        <Button title="Nova refeição" iconName="plus" />

        <DailyMealContainer>
          <DailyMealTitle>12/08/22</DailyMealTitle>

          <DailyMealItem>
            <DailyMealHour>20:00</DailyMealHour>
            <DailyMealSeparator />
            <DailyMealDescription>X-tudo</DailyMealDescription>
            <DailyMealCircleStatus type="in" />
          </DailyMealItem>
          <DailyMealItem>
            <DailyMealHour>20:00</DailyMealHour>
            <DailyMealSeparator />
            <DailyMealDescription>X-tudo</DailyMealDescription>
            <DailyMealCircleStatus type="in" />
          </DailyMealItem>
          <DailyMealItem>
            <DailyMealHour>20:00</DailyMealHour>
            <DailyMealSeparator />
            <DailyMealDescription>X-tudo</DailyMealDescription>
            <DailyMealCircleStatus type="in" />
          </DailyMealItem>
        </DailyMealContainer>
      </MealsContainer>
    </ScrollView>
  );
}
