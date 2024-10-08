import { useMemo, ComponentType } from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  GestureResponderEvent,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { CheckboxProps } from './Checkbox.types';
import {
  $inputOuter,
  $checkboxDetail,
  $checkboxInner,
  $iconSizePresets,
  $sizePresets,
} from './Checkbox.style';
import { useTheme } from '@/theme/hooks';
import { Icon } from '../../Icon';

export function Checkbox(props: CheckboxProps) {
  const {
    color = 'primary',
    value,
    onValueChange,
    onPress,
    disabled,
    size = 'medium',
    checkboxIcon = { name: 'check', preset: 'image' },
    outerStyle: $outerStyleOverride,
    innerStyle: $innerStyleOverride,
    detailStyle: $detailStyleOverride,
  } = props;
  const theme = useTheme();

  const Wrapper = useMemo<ComponentType<TouchableOpacityProps>>(
    () => (disabled ? View : TouchableOpacity),
    [disabled]
  );

  const offBackgroundColor = [
    disabled && theme.colors.palette.neutral[200],
    '#FFFFFF',
  ].filter(Boolean)[0];

  const outerBorderColor = [
    (disabled || !value) && theme.colors.palette.neutral[200],
    theme.colors.palette[color].main,
  ].filter(Boolean)[0];

  const onBackgroundColor = [
    disabled && theme.colors.palette.neutral[200],
    theme.colors.palette[color].main,
  ].filter(Boolean)[0];

  function handlePress(e: GestureResponderEvent) {
    if (disabled) {
      return;
    }
    onValueChange?.(!value);
    onPress?.(e);
  }

  return (
    <Wrapper
      activeOpacity={1}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: value, disabled }}
      onPress={handlePress}
    >
      <View
        style={[
          $inputOuter,
          {
            backgroundColor: offBackgroundColor || '#FFFFFF',
            borderColor: outerBorderColor || '#000000',
          },
          $outerStyleOverride,
          $sizePresets[size],
        ]}
      >
        <Animated.View
          style={[
            $checkboxInner,
            { backgroundColor: onBackgroundColor || '#FFFFFF' },
            $innerStyleOverride,
            useAnimatedStyle(
              () => ({ opacity: withTiming(value ? 1 : 0) }),
              [value]
            ),
          ]}
        >
          <Icon
            color={theme.colors.palette.neutral.contrastText}
            containerStyle={[$checkboxDetail, $detailStyleOverride]}
            size={$iconSizePresets[size]}
            {...checkboxIcon}
          />
        </Animated.View>
      </View>
    </Wrapper>
  );
}
