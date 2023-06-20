import 'styled-components/native';
import theme from '../theme';

declare module 'styled-components/native' {
  type TeamType = typeof theme;

  export interface DefaultTheme extends TeamType {}
}
