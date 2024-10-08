import { Image as ExpoImage } from 'expo-image';
import { ImageProps } from '../Image.types';
import { createImageSizeStyle } from '../Image.styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useState } from 'react';
import { Column } from '../../Container';

export function Image(props: ImageProps) {
  const {
    size,
    style: $styleOverride,
    source: sourceOverride,
    loading: loadingOverride,
    ...rest
  } = props;

  const [loading, setLoading] = useState(false);

  const ImageSizeStyle = createImageSizeStyle(size);
  const $styles = [ImageSizeStyle?.size, $styleOverride];

  if (loadingOverride) {
    return (
      <Column>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
            width={ImageSizeStyle?.size.width}
            height={ImageSizeStyle?.size.height}
          />
        </SkeletonPlaceholder>
      </Column>
    );
  }

  return (
    <ExpoImage
      style={$styles}
      onLoadStart={() => setLoading(true)}
      onLoadEnd={() => setLoading(false)}
      {...rest}
    >
      {loading && (
        <Column>
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item
              width={ImageSizeStyle?.size.width}
              height={ImageSizeStyle?.size.height}
            />
          </SkeletonPlaceholder>
        </Column>
      )}
    </ExpoImage>
  );
}

export default Image;
