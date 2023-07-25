import styled, { css } from 'styled-components/native';

interface ContainerProps {
  small: boolean;
  color?: 'success' | 'danger';
}

export const Container = styled.View<ContainerProps>`
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 4%;
  flex-grow: 1;

  background-color: ${({ theme, color }) =>
    color == null
      ? theme.colors.gray600
      : color === 'success'
      ? theme.colors.greenLight
      : theme.colors.redLight};
  width: ${({ small }) => (small ? '48%' : '100%')};
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.bold};
    font-size: ${theme.font.size.title.md};
  `}
  text-align: center;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.body.sm};
  `}
  text-align: center;
`;
