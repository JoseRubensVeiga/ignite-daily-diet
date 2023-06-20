import { PercentageInformation } from '@components/PercentageInformation';
import { Container } from './styles';
import { Header } from '@components/Header';

export function Home() {
  return (
    <Container>
      <Header />

      <PercentageInformation />
    </Container>
  );
}
