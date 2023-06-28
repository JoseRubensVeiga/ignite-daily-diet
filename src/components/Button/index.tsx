import { TouchableHighlight } from 'react-native-gesture-handler';
import { ButtonContainer, ButtonIcon, ButtonText } from './styles';

interface Props {
  title: string;
  iconName?: string;
}

export function Button({ title, iconName }: Props) {
  return (
    <TouchableHighlight>
      <ButtonContainer>
        {!!iconName && <ButtonIcon name={iconName} />}
        <ButtonText>{title}</ButtonText>
      </ButtonContainer>
    </TouchableHighlight>
  );
}
