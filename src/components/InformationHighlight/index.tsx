import { Container, Description, Value } from './styles';

interface Props {
  value: string;
  description: string;
  small?: boolean;
  color?: 'success' | 'danger';
}

export function InformationHighlight({
  value,
  description,
  small = false,
  color,
}: Props) {
  return (
    <Container small={small} color={color}>
      <Value>{value}</Value>
      <Description>{description}</Description>
    </Container>
  );
}
