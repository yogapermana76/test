import React from 'react';
import { Box, BoxProps } from '../Container';
import Reanimated from 'react-native-reanimated';

export interface FooterProps extends BoxProps {}

// Gunakan React.forwardRef untuk mendukung ref forwarding
export const Footer = React.forwardRef(function Footer(
  props: FooterProps,
  ref
) {
  const { children, bottom = 0, withSafeArea = 'bottomOnly', ...rest } = props;

  return (
    <Box
      ref={ref} // Pastikan ref diteruskan ke komponen yang memerlukan ref
      bottom={bottom}
      left={0}
      right={0}
      {...rest}
      withSafeArea={withSafeArea}
    >
      {children}
    </Box>
  );
});

// Bungkus Footer dengan Reanimated.createAnimatedComponent
export const ReanimatedFooter = Reanimated.createAnimatedComponent(Footer);
