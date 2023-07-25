import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

interface PercentageInformationContainerProps {
  bgColor: string;
}

export const PercentageInformationContainer = styled.TouchableOpacity<PercentageInformationContainerProps>`
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

export const MealsContainer = styled.View``;

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    font-size: ${theme.font.size.body.md};
    font-family: ${theme.font.family.regular};
  `}

  margin-top: 44px;
  margin-bottom: 10px;
`;

export const DailyMealContainer = styled.View`
  margin-top: 20px;
`;

export const DailyMealTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    font-size: ${theme.font.size.body.md};
    font-family: ${theme.font.family.bold};
  `}
`;

export const DailyMealItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-top: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  border-radius: 6px;
`;

export const DailyMealHour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    font-size: ${theme.font.size.body.sm};
    font-family: ${theme.font.family.bold};
  `}
`;

export const DailyMealSeparator = styled.View`
  margin-right: 10px;
  margin-left: 10px;
  height: 14px;
  background-color: ${({ theme }) => theme.colors.gray400};
  width: 1px;
`;

export const DailyMealDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray200};
    font-size: ${theme.font.size.body.md};
    font-family: ${theme.font.family.regular};
  `}
`;

interface DailyMealCircleStatusProps {
  type: 'in' | 'out';
}

export const DailyMealCircleStatus = styled.View<DailyMealCircleStatusProps>`
  width: 14px;
  height: 14px;
  background-color: ${({ theme, type }) =>
    type === 'in' ? theme.colors.green : theme.colors.red};
  border-radius: 7px;
  margin-left: auto;
`;
