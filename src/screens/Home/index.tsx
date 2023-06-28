import { PercentageInformation } from '@components/PercentageInformation';
import {
  Container,
  PercentageInformationContainer,
  OpenImage,
  MealsContainer,
  MealTitle,
} from './styles';
import { Header } from '@components/Header';
import { useTheme } from 'styled-components/native';
import openImage from '@assets/open.png';
import { Button } from '@components/Button';

export function Home() {
  const theme = useTheme();

  return (
    <Container>
      <Header />

      <PercentageInformationContainer bgColor={theme.colors.greenLight}>
        <OpenImage source={openImage} />
        <PercentageInformation />
      </PercentageInformationContainer>

      <MealsContainer>
        <MealTitle>Refeições</MealTitle>

        <Button title="Nova refeição" iconName="plus" />
      </MealsContainer>
    </Container>
  );
}
