import { ViewStyle, StyleProp } from 'react-native';

export const $inputOuterBase: ViewStyle = {
  height: 24,
  width: 24,
  borderWidth: 2,
  alignItems: 'center',
  overflow: 'hidden',
  flexGrow: 0,
  flexShrink: 0,
  justifyContent: 'space-between',
  flexDirection: 'row',
};

export const $inputOuter: StyleProp<ViewStyle> = [
  $inputOuterBase,
  { borderRadius: 12 },
];

export const $radioInner: ViewStyle = {
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

export const $radioDetail: ViewStyle = {
  width: 12,
  height: 12,
  borderRadius: 6,
};
