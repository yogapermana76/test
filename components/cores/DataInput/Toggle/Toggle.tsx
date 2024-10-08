import { ComponentType, useMemo } from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { Checkbox } from '../Checkbox';
import { Radio } from '../Radio';
import { Switch } from '../Switch';
import { Text } from '../../Text';
import {
  $helper,
  $inputWrapper,
  $label,
  $labelLeft,
  $labelRight,
} from './Toggle.style';
import { BaseToggleProps, ToggleProps } from './Toggle.types';
import { useTheme } from '@/theme/hooks';

/**
 * Renders a boolean input.
 * This is a controlled component that requires an onValueChange callback that updates the value prop in order for the component to reflect user actions. If the value prop is not updated, the component will continue to render the supplied value prop instead of the expected result of any user actions.
 *
 */
export function Toggle(props: ToggleProps) {
  const {
    color = 'primary',
    variant = 'checkbox',
    disabled,
    value,
    onPress,
    onValueChange,
    labelPosition = 'right',
    helper,
    helperTx,
    helperTxOptions,
    HelperTextProps,
    error,
    errorTx,
    errorTxOptions,
    InputProps,
    containerStyle: $containerStyleOverride,
    inputWrapperStyle: $inputWrapperStyleOverride,
    ...WrapperProps
  } = props;
  const theme = useTheme();

  const Wrapper = useMemo<ComponentType<TouchableOpacityProps>>(
    () => (disabled ? View : TouchableOpacity),
    [disabled]
  );
  const ToggleInput = useMemo(
    () => ToggleInputs[variant] || (() => null),
    [variant]
  );

  const $containerStyles = [$containerStyleOverride];
  const $inputWrapperStyles = [$inputWrapper, $inputWrapperStyleOverride];
  const $helperStyles = [$helper, HelperTextProps?.style];
  const $errorHelperStyles = [
    $helper,
    error && { color: theme.colors.error },
  ].filter(Boolean);

  return (
    <Wrapper
      activeOpacity={1}
      accessibilityRole={variant}
      accessibilityState={{ checked: value, disabled }}
      {...WrapperProps}
      style={$containerStyles}
      onPress={onPress}
    >
      <View style={$inputWrapperStyles}>
        {labelPosition === 'left' && (
          <FieldLabel {...props} labelPosition={labelPosition} />
        )}

        <ToggleInput
          {...InputProps}
          color={color}
          value={value}
          disabled={disabled}
          onPress={onPress}
          onValueChange={onValueChange}
        />

        {labelPosition === 'right' && (
          <FieldLabel {...props} labelPosition={labelPosition} />
        )}
      </View>

      {!!(error || errorTx) && (
        <Text
          preset="Text md"
          weight="semiBold"
          text={error}
          tx={errorTx}
          txOptions={errorTxOptions}
          style={$errorHelperStyles as StyleProp<TextStyle>}
        />
      )}

      {!!(helper || helperTx) && (
        <Text
          preset="Text md"
          text={helper}
          tx={helperTx}
          txOptions={helperTxOptions}
          {...HelperTextProps}
          style={$helperStyles}
        />
      )}
    </Wrapper>
  );
}

const ToggleInputs = {
  checkbox: Checkbox,
  switch: Switch,
  radio: Radio,
} as const;

function FieldLabel(props: BaseToggleProps) {
  const {
    label,
    labelTx,
    labelTxOptions,
    LabelTextProps,
    labelPosition,
    labelStyle: $labelStyleOverride,
  } = props;

  if (!label && !labelTx && !LabelTextProps?.children) {
    return null;
  }

  const $labelStyle = [
    $label,
    labelPosition === 'right' && $labelRight,
    labelPosition === 'left' && $labelLeft,
    $labelStyleOverride,
    LabelTextProps?.style,
  ];

  return (
    <Text
      preset="Text sm"
      weight="normal"
      text={label}
      tx={labelTx}
      txOptions={labelTxOptions}
      {...LabelTextProps}
      style={$labelStyle}
    />
  );
}
