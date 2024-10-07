import { useCallback } from 'react';
import { ThemeVariant } from '../theme.types';
import { typography } from '../typography';
import { colors } from '../colors';
import { useStores } from '@/models';

export function useTheme() {
  const { themeStore } = useStores();

  const setTheme = useCallback(
    (theme: ThemeVariant) => {
      themeStore.setTheme(theme);
    },
    [themeStore]
  );

  return {
    colors: colors[themeStore.theme],
    setTheme,
    typography,
  };
}
