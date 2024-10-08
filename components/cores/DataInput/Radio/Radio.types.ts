import { PaletteVariant } from '@/theme';
import {
  ImageStyle,
  ViewStyle,
  SwitchProps as RNSwitchProps,
  GestureResponderEvent,
} from 'react-native';

export interface RadioProps {
  value?: boolean;
  /**
   * Invoked with the new value when the value changes.
   */
  onValueChange?: RNSwitchProps['onValueChange'];
  /**
   * If `true` switch in `disabled` state.
   */
  disabled?: boolean;
  /**
   * Optional input wrapper style override.
   * This gives the inputs their size, shape, "off" background-color, and outer border.
   */
  outerStyle?: ViewStyle;
  /**
   * Optional input style override.
   * This gives the inputs their inner characteristics and "on" background-color.
   */
  innerStyle?: ViewStyle;
  /**
   * Optional style prop that affects the dot View.
   */
  detailStyle?: Omit<ViewStyle & ImageStyle, 'overflow'>;
  /**
   * Called when the touch is released, but not if cancelled (e.g. by a scroll that steals the responder lock).
   */
  onPress?: (e: GestureResponderEvent) => void;
  /**
   * Use different color variant.
   * @default "primary"
   */
  color?: PaletteVariant;
}
