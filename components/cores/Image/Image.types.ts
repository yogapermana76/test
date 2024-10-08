import { ImageProps as ExpoImageProps } from 'expo-image';
import { ViewStyle } from 'react-native';

export type ImageSizeType =
  | {
      h?: ViewStyle['height'];
      w?: ViewStyle['width'];
    }
  | number
  | string;

export interface ImageProps extends ExpoImageProps {
  size?: ImageSizeType;
  loading?: boolean;
}
