import { isRTL } from '@/i18n';
import { spacing, Theme } from '@/theme';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export const $baseInputWrapperStyles = (theme: Theme): ViewStyle => ({
  borderWidth: 1,
  borderRadius: 4,
  backgroundColor: theme.colors.palette.neutral.contrastText,
  borderColor: theme.colors.palette.neutral[200],
  overflow: 'hidden',
  width: '100%',
});

export const $baseHelperStyles: TextStyle = { marginTop: spacing.extraSmall };

export const $rightAccessoryStyle: ViewStyle = {
  marginEnd: spacing.medium,
  height: 48,
  justifyContent: 'center',
  alignItems: 'center',
};

export const $leftAccessoryStyle: ViewStyle = {
  marginStart: spacing.medium,
  height: 48,
  justifyContent: 'center',
  alignItems: 'center',
};

export const $baseLabelStyles = (theme: Theme): TextStyle => ({
  marginBottom: spacing.extraSmall,
  color: theme.colors.palette.neutral[900],
});

export const $baseInputStyles = (theme: Theme): StyleProp<TextStyle> => [
  {
    flex: 1,
    alignSelf: 'stretch',
    fontFamily: theme.typography.primary.normal,
    color: theme.colors.palette.neutral[900],
    fontSize: 14,
    height: 18,

    // https://github.com/facebook/react-native/issues/21720#issuecomment-532642093
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginVertical: spacing.medium,
    marginHorizontal: spacing.medium,
  },
  isRTL && { textAlign: 'right' as TextStyle['textAlign'] },
];
