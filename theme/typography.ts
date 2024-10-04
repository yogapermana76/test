// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from 'react-native';
import {
  SpaceGrotesk_300Light as spaceGroteskLight,
  SpaceGrotesk_400Regular as spaceGroteskRegular,
  SpaceGrotesk_500Medium as spaceGroteskMedium,
  SpaceGrotesk_600SemiBold as spaceGroteskSemiBold,
  SpaceGrotesk_700Bold as spaceGroteskBold,
} from '@expo-google-fonts/space-grotesk';
import {
  Figtree_300Light as figtreeLight,
  Figtree_400Regular as figtreeRegular,
  Figtree_500Medium as figtreeMedium,
  Figtree_600SemiBold as figtreeSemiBold,
  Figtree_700Bold as figtreeBold,
} from '@expo-google-fonts/figtree';
import { ThemeTypography } from './theme.types';
import { normalizeFont } from '@/utils';

// import icons fonts
// const Icons = require('_assets/fonts/icons.ttf');

export const customFontsToLoad = {
  spaceGroteskLight,
  spaceGroteskRegular,
  spaceGroteskMedium,
  spaceGroteskSemiBold,
  spaceGroteskBold,
  figtreeLight,
  figtreeRegular,
  figtreeMedium,
  figtreeSemiBold,
  figtreeBold,

  // load icons
  // Icons,
};

/**
 * Normalize each font
 */
const fonts = {
  figtree: normalizeFont({
    // Cross-platform Google font.
    light: 'figtreeLight',
    normal: 'figtreeRegular',
    medium: 'figtreeMedium',
    semiBold: 'figtreeSemiBold',
    bold: 'figtreeBold',
  }),
  helveticaNeue: normalizeFont({
    // iOS only font.
    thin: 'HelveticaNeue-Thin',
    light: 'HelveticaNeue-Light',
    normal: 'Helvetica Neue',
    medium: 'HelveticaNeue-Medium',
  }),
  courier: normalizeFont({
    // iOS only font.
    normal: 'Courier',
  }),
  sansSerif: normalizeFont({
    // Android only font.
    thin: 'sans-serif-thin',
    light: 'sans-serif-light',
    normal: 'sans-serif',
    medium: 'sans-serif-medium',
  }),
  monospace: normalizeFont({
    // Android only font.
    normal: 'monospace',
  }),
};

export const typography: ThemeTypography = {
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.figtree,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary:
    Platform.select({
      ios: fonts.helveticaNeue,
      android: fonts.sansSerif,
    }) || fonts.figtree,
  /**
   * Lets get fancy with a monospace font!
   */
  code:
    Platform.select({ ios: fonts.courier, android: fonts.monospace }) ||
    fonts.figtree,
};
