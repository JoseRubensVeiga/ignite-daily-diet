import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonIcon, ButtonText } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  iconName?: string;
}

export function Button({ title, iconName, ...rest }: Props) {
  return (
    <Container {...rest}>
      {!!iconName && <ButtonIcon name={iconName} />}
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
