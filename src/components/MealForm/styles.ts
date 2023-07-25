import { styled } from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px 24px;
`;
