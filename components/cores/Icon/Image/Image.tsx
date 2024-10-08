import React from 'react';
import { Image } from '../../Image';
import { IconProps } from '../Icon.types';
import { iconRegistry } from './Image.types';

type IconName = keyof typeof iconRegistry;

export function IconImage(props: IconProps & { name: IconName }) {
  const { name, size, color } = props;

  const hasColor = !!color;
  const tintColor = hasColor ? color : undefined;

  return (
    <Image
      tintColor={tintColor as string}
      contentFit="contain"
      source={iconRegistry[name]}
      priority="high"
      size={size}
    />
  );
}
