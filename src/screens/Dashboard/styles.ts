import { css, styled } from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
`;

export const PercentageInformationContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.green};
  padding-bottom: 60px;
`;

export const MainDashboardContainer = styled.View`
  border-radius: 20px;
  margin-top: -15px;
  padding: 36px 24px 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const MainDashboardTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.bold};
    font-size: ${theme.font.size.title.xs};
  `}
  text-align: center;
  margin-bottom: 23px;
`;

export const FooterInformationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`;
