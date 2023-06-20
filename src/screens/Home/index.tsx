import { PercentageInformation } from '@components/PercentageInformation';
import { Container, PercentageInformationContainer, OpenImage } from './styles';
import { Header } from '@components/Header';
import { useTheme } from 'styled-components/native';
import openImage from '@assets/open.png';

export function Home() {
  const theme = useTheme();

  return (
    <Container>
      <Header />

      <PercentageInformationContainer bgColor={theme.colors.greenLight}>
        <OpenImage source={openImage} />
        <PercentageInformation />
      </PercentageInformationContainer>
    </Container>
  );
}
