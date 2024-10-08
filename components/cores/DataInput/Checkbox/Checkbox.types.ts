import {
  ViewStyle,
  ImageStyle,
  GestureResponderEvent,
  SwitchProps as RNSwitchProps,
} from 'react-native';
import { IconProps } from '../../Icon';
import { PaletteVariant } from '@/theme';

export type CheckboxSize = 'large' | 'medium' | 'small';

export interface CheckboxProps {
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
   * Optional style prop that affects the icon used for "on" state.
   */
  detailStyle?: Omit<ViewStyle & ImageStyle, 'overflow'>;
  /**
   * Checkbox-only prop that changes the icon used for the "on" state.
   */
  checkboxIcon?: IconProps;
  /**
   * Called when the touch is released, but not if cancelled (e.g. by a scroll that steals the responder lock).
   */
  onPress?: (e: GestureResponderEvent) => void;
  /**
   * Use different color variant.
   * @default "primary"
   */
  color?: PaletteVariant;

  size?: CheckboxSize;
}
