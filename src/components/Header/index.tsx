import { AvatarImage, Container, LogoImage } from './styles';

import logoImage from '@assets/logo.png';
import avatarImage from '@assets/user_avatar.png';

export function Header() {
  return (
    <Container>
      <LogoImage source={logoImage} />
      <AvatarImage source={avatarImage} />
    </Container>
  );
}
