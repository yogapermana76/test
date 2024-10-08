import { ViewStyle, ImageStyle, TextStyle, StyleProp } from 'react-native';
import { ToggleVariants } from './Toggle.types';
import { spacing, Theme } from '@/theme';

export const $inputWrapper: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};

const $inputOuterBase: ViewStyle = {
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

export const $inputOuterVariants: Record<
  ToggleVariants,
  StyleProp<ViewStyle>
> = {
  checkbox: [$inputOuterBase, { borderRadius: 4 }],
  radio: [$inputOuterBase, { borderRadius: 12 }],
  switch: [
    $inputOuterBase,
    { height: 32, width: 56, borderRadius: 16, borderWidth: 0 },
  ],
};

export const $checkboxInner: ViewStyle = {
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

export const $checkboxDetail: ImageStyle = {
  width: 20,
  height: 20,
  resizeMode: 'contain',
};

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

export const $switchInner = (theme: Theme): ViewStyle => ({
  width: '100%',
  height: '100%',
  alignItems: 'center',
  borderColor: theme.colors.transparent,
  overflow: 'hidden',
  position: 'absolute',
  paddingStart: 4,
  paddingEnd: 4,
});

export const $switchDetail: ViewStyle = {
  borderRadius: 12,
  position: 'absolute',
  width: 24,
  height: 24,
};

export const $helper: TextStyle = {
  marginTop: spacing.extraSmall,
};

export const $label: TextStyle = {
  // flex: 1,
};

export const $labelRight: TextStyle = {
  marginStart: spacing.extraSmall + spacing.micro,
};

export const $labelLeft: TextStyle = {
  marginEnd: spacing.extraSmall + spacing.micro,
};

export const $switchAccessibility: TextStyle = {
  width: '40%',
  justifyContent: 'center',
  alignItems: 'center',
};

export const $switchAccessibilityIcon: ImageStyle = {
  width: 14,
  height: 14,
  resizeMode: 'contain',
};

export const $switchAccessibilityLine: ViewStyle = {
  width: 2,
  height: 12,
};

export const $switchAccessibilityCircle: ViewStyle = {
  borderWidth: 2,
  width: 12,
  height: 12,
  borderRadius: 6,
};
