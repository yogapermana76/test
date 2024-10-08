import { ViewStyle, StyleProp } from 'react-native';
import { SwitchProps } from './Switch.types';
import { spacing, Theme } from '@/theme';

export const $baseSwitchInner: ViewStyle = {
  width: '100%',
  height: '100%',
  alignItems: 'center',
  overflow: 'hidden',
  position: 'absolute',
  paddingStart: spacing.micro,
  paddingEnd: spacing.micro,
};

export const $switchInner = (theme: Theme): StyleProp<ViewStyle> => [
  $baseSwitchInner,
  {
    borderColor: theme.colors.transparent,
  },
];

export const $switchDetail: SwitchProps['detailStyle'] = {
  borderRadius: 12,
  position: 'absolute',
  width: 16,
  height: 16,
};

export const $inputOuter: ViewStyle = {
  height: 20,
  width: 36,
  borderRadius: 16,
  alignItems: 'center',
  overflow: 'hidden',
  flexGrow: 0,
  flexShrink: 0,
  justifyContent: 'space-between',
  flexDirection: 'row',
};
