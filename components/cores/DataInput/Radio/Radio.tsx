import React, { useMemo, ComponentType } from 'react';
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
import { $inputOuter, $radioInner, $radioDetail } from './Radio.style';
import { RadioProps } from './Radio.types';
import { useTheme } from '@/theme/hooks';

export function Radio(props: RadioProps) {
  const {
    color = 'primary',
    value,
    onValueChange,
    onPress,
    disabled,
    outerStyle: $outerStyleOverride,
    innerStyle: $innerStyleOverride,
    detailStyle: $detailStyleOverride,
  } = props;
  const theme = useTheme();

  const Wrapper = useMemo<ComponentType<TouchableOpacityProps>>(
    () => (disabled ? View : TouchableOpacity),
    [disabled]
  );

  const offBackgroundColor = '#FFFFFF';

  const outerBorderColor =
    [
      disabled || !value ? theme.colors.palette.neutral[200] : null,
      value ? theme.colors.palette[color].main : null,
    ].filter(Boolean)[0] || theme.colors.palette.neutral[200];

  const onBackgroundColor = '#FFFFFF';

  const dotBackgroundColor = [
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
      accessibilityRole="radio"
      accessibilityState={{ checked: value, disabled }}
      onPress={handlePress}
    >
      <View
        style={[
          $inputOuter,
          {
            backgroundColor: offBackgroundColor,
            borderColor: outerBorderColor,
          },
          $outerStyleOverride,
        ]}
      >
        <Animated.View
          style={[
            $radioInner,
            { backgroundColor: onBackgroundColor },
            $innerStyleOverride,
            useAnimatedStyle(
              () => ({ opacity: withTiming(value ? 1 : 0) }),
              [value]
            ),
          ]}
        >
          <View
            style={[
              $radioDetail,
              { backgroundColor: dotBackgroundColor || '' },
              $detailStyleOverride,
            ]}
          />
        </Animated.View>
      </View>
    </Wrapper>
  );
}
