import React from 'react';
import { TextPropsType } from '../Text';
import { ContainerConfigProps } from '../Container';

export type DividerProps = {
  type?: 'horizontal' | 'vertical';
  text?: TextPropsType;
  color?: string;
  height?: number;
  borderRadius?: ContainerConfigProps['borderRadius'];
  containerProps?: ContainerConfigProps;
  children?: React.ReactNode;
};
