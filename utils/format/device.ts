import { size } from '@/theme';
import * as Application from 'expo-application';

// check if device height more than 720
export const isSmallDeviceHeight = size.height < 720;

// get version of the app
export const getVersion = () => {
  return Application.nativeApplicationVersion;
};

export const getAppName = () => {
  return Application.applicationName;
};
