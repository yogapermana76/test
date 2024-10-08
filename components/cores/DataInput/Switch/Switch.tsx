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
import { SwitchProps } from './Switch.types';
import {
  $switchDetail,
  $baseSwitchInner,
  $switchInner,
  $inputOuter,
} from './Switch.style';
import { useTheme } from '@/theme/hooks';

export function Switch(props: SwitchProps) {
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

  const knobSizeFallback = 2;

  const knobWidth = [
    $detailStyleOverride?.width,
    $switchDetail?.width,
    knobSizeFallback,
  ].find((v) => typeof v === 'number');

  const knobHeight = [
    $detailStyleOverride?.height,
    $switchDetail?.height,
    knobSizeFallback,
  ].find((v) => typeof v === 'number');

  const offBackgroundColor = theme.colors.palette.neutral[200];

  const onBackgroundColor =
    [
      disabled ? theme.colors.palette.neutral[200] : null,
      theme.colors.palette[color].main,
    ].filter(Boolean)[0] || theme.colors.palette.neutral[200];

  const knobBackgroundColor = (function () {
    if (value) {
      return [$detailStyleOverride?.backgroundColor, '#FFFFFF'].filter(
        Boolean
      )[0];
    } else {
      return [$innerStyleOverride?.backgroundColor, '#FFFFFF'].filter(
        Boolean
      )[0];
    }
  })();

  const $animatedSwitchKnob = useAnimatedStyle(() => {
    const offsetLeft = ($innerStyleOverride?.paddingStart ||
      $innerStyleOverride?.paddingLeft ||
      $baseSwitchInner.paddingStart ||
      $baseSwitchInner.paddingLeft ||
      0) as number;

    const offsetRight = ($innerStyleOverride?.paddingEnd ||
      $innerStyleOverride?.paddingRight ||
      $baseSwitchInner.paddingEnd ||
      $baseSwitchInner.paddingRight ||
      0) as number;

    const start = withTiming(value ? '100%' : '0%');
    const marginStart = withTiming(
      value ? -(knobWidth || 0) - offsetRight : 0 + offsetLeft
    );

    return { start, marginStart };
  }, [value, knobWidth]);

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
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
      onPress={handlePress}
    >
      <View
        style={[
          $inputOuter,
          { backgroundColor: offBackgroundColor },
          $outerStyleOverride,
        ]}
      >
        <Animated.View
          style={[
            $switchInner(theme),
            { backgroundColor: onBackgroundColor },
            $innerStyleOverride,
            useAnimatedStyle(
              () => ({ opacity: withTiming(value ? 1 : 0) }),
              [value]
            ),
          ]}
        />

        <Animated.View
          style={[
            $switchDetail,
            $detailStyleOverride,
            $animatedSwitchKnob,
            { width: knobWidth, height: knobHeight },
            { backgroundColor: knobBackgroundColor },
          ]}
        />
      </View>
    </Wrapper>
  );
}
