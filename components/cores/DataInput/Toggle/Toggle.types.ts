import {
  TouchableOpacityProps,
  TextInputProps,
  SwitchProps as RNSwitchProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { RadioProps } from '../Radio';
import { SwitchProps } from '../Switch';
import { CheckboxProps } from '../Checkbox';
import { PaletteVariant } from '@/theme';
import { TextProps } from '../../Text';

export type ToggleVariants = 'checkbox' | 'radio' | 'switch';

export interface BaseToggleProps extends Omit<TouchableOpacityProps, 'style'> {
  /**
   * Use different color variant.
   * @default "primary"
   */
  color?: PaletteVariant;
  /**
   * The variant of the toggle.
   * Options: "checkbox", "switch", "radio"
   * Default: "checkbox"
   */
  variant?: ToggleVariants;
  /**
   * `Checkbox`, `Radio`, or `Switch` props.
   */
  InputProps?: CheckboxProps | RadioProps | SwitchProps;
  /**
   * If `true` Toggle is in `disabled` state and not editable.
   * @default false
   */
  disabled?: boolean;
  /**
   * If false, input is not editable. The default value is true.
   */
  editable?: TextInputProps['editable'];
  /**
   * The value of the field. If true the component will be turned on.
   */
  value?: boolean;
  /**
   * Invoked with the new value when the value changes.
   */
  onValueChange?: RNSwitchProps['onValueChange'];
  /**
   * Style overrides for the container
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Style overrides for the input wrapper
   */
  inputWrapperStyle?: StyleProp<ViewStyle>;
  /**
   * The position of the label relative to the action component.
   * Default: right
   */
  labelPosition?: 'left' | 'right';
  /**
   * The label text to display if not using `labelTx`.
   */
  label?: TextProps['text'];
  /**
   * Label text which is looked up via i18n.
   */
  labelTx?: TextProps['tx'];
  /**
   * Optional label options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  labelTxOptions?: TextProps['txOptions'];
  /**
   * Style overrides for label text.
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * Pass any additional props directly to the label Text component.
   */
  LabelTextProps?: TextProps;
  /**
   * The helper text to display if not using `helperTx`.
   */
  helper?: TextProps['text'];
  /**
   * Helper text which is looked up via i18n.
   */
  helperTx?: TextProps['tx'];
  /**
   * Optional helper options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  helperTxOptions?: TextProps['txOptions'];
  /**
   * Pass any additional props directly to the helper Text component.
   */
  HelperTextProps?: TextProps;
  /**
   * The error text to display if not using `errorTx`.
   */
  error?: TextProps['text'];
  /**
   * Error text which is looked up via i18n.
   */
  errorTx?: TextProps['tx'];
  /**
   * Optional helper options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  errorTxOptions?: TextProps['txOptions'];
}

export interface CheckboxToggleProps extends BaseToggleProps {
  variant?: 'checkbox';
  InputProps?: CheckboxProps;
}

export interface RadioToggleProps extends BaseToggleProps {
  variant?: 'radio';
  InputProps?: RadioProps;
}

export interface SwitchToggleProps extends BaseToggleProps {
  variant?: 'switch';
  InputProps?: SwitchProps;
}

export type ToggleProps =
  | CheckboxToggleProps
  | RadioToggleProps
  | SwitchToggleProps;
