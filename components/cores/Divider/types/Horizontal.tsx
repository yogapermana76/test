import { useTheme } from '@/theme/hooks';
import { Column, Row } from '../../Container';
import { DividerProps } from '../Divider.types';
import { createTextProps, Text } from '../../Text';
import { spacing } from '@/theme';

/**
 * FIXME: if you want to customize borderStyle, you can do it here:
 * https://dev.to/franciscomendes10866/how-to-create-a-dashed-line-using-react-native-svg-3lip
 * */

export function Horizontal(props: DividerProps) {
  const { colors } = useTheme();
  const defaultColor = colors.palette.neutral[500];
  const {
    height = 0.5,
    color = defaultColor,
    text,
    borderRadius,
    containerProps,
  } = props;

  const textProps = createTextProps(text);

  return (
    <Row alignment="center" {...containerProps}>
      <Column
        borderWidth={{ t: height }}
        borderColor={color}
        borderRadius={borderRadius}
      />
      {!!textProps && (
        <Text
          preset="Text md"
          weight="normal"
          padding={{ h: spacing.small }}
          {...textProps}
        />
      )}
      {!!textProps && (
        <Column
          borderWidth={{ t: height }}
          borderColor={color}
          borderRadius={borderRadius}
        />
      )}
    </Row>
  );
}
