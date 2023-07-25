import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

export const statusBarHeight =
  Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
