import { PercentageInformation } from '@components/PercentageInformation';
import { View } from 'react-native';
import {
  Container,
  FooterInformationContainer,
  MainDashboardContainer,
  MainDashboardTitle,
  PercentageInformationContainer,
} from './styles';
import { statusBarHeight } from '../../utils/status-bar-height';
import { InformationHighlight } from '@components/InformationHighlight';

export function Dashboard() {
  return (
    <Container>
      <PercentageInformationContainer
        style={{ paddingTop: statusBarHeight + 35 }}
      >
        <PercentageInformation />
      </PercentageInformationContainer>

      <MainDashboardContainer>
        <MainDashboardTitle>Estatísticas gerais</MainDashboardTitle>

        <InformationHighlight
          value="22"
          description="melhor sequência de pratos dentro da dieta"
        />

        <InformationHighlight value="109" description="refeições registradas" />

        <FooterInformationContainer>
          <InformationHighlight
            value="99"
            description="refeições dentro da dieta"
            small
            color="danger"
          />
          <InformationHighlight
            value="10"
            description="refeições fora da dieta"
            small
            color="success"
          />
        </FooterInformationContainer>
      </MainDashboardContainer>
    </Container>
  );
}
