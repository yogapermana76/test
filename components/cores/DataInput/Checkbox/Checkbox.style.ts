import { ViewStyle, ImageStyle } from 'react-native';
import { CheckboxSize } from './Checkbox.types';

export const $inputOuter: ViewStyle = {
  height: 20,
  width: 20,
  borderWidth: 2,
  alignItems: 'center',
  overflow: 'hidden',
  flexGrow: 0,
  flexShrink: 0,
  justifyContent: 'space-between',
  flexDirection: 'row',
  borderRadius: 6,
};

export const $checkboxInner: ViewStyle = {
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

export const $checkboxDetail: ImageStyle = {
  resizeMode: 'contain',
};

export const $sizePresets: Record<CheckboxSize, ViewStyle> = {
  large: { height: 26, width: 26 },
  medium: { height: 20, width: 20 },
  small: { height: 16, width: 16 },
};

export const $iconSizePresets: Record<CheckboxSize, number> = {
  large: 12,
  medium: 10,
  small: 8,
};
