import { Feather } from '@expo/vector-icons';
import { css, styled } from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gray200};
  width: 100%;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonIcon = styled(Feather).attrs({
  color: '#FFFFFF',
  size: 20,
})`
  margin-right: 15px;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.bold};
    color: ${theme.colors.white};
    font-size: ${theme.font.size.body.sm};
  `}
`;
