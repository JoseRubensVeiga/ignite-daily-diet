import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 30px 20px 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const PercentageInformationContainer = styled.View<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  border-radius: 8px;
  margin-top: 32px;
  height: 102px;
  justify-content: center;
`;

export const OpenImage = styled.Image`
  position: absolute;
  right: 8px;
  top: 8px;
  height: 24px;
  width: 24px;
`;
