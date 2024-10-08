import { ComponentType } from 'react';
import { IconLayout, IconLayoutProps } from './Layout';

export function withIconLayout<T extends object>(
  WrappedComponent: ComponentType<T>
) {
  function WithIconLayout(props: IconLayoutProps & T) {
    const { containerStyle, onPress, padding, margin, ...iconProps } = props;

    const layoutProps = {
      containerStyle,
      onPress,
      padding,
      margin,
    };

    return (
      <IconLayout {...layoutProps}>
        <WrappedComponent {...(iconProps as T)} />
      </IconLayout>
    );
  }

  return WithIconLayout;
}
