import { spacing } from '@/theme';
import { useTheme } from '@/theme/hooks';
import { Column } from '../../Container';
import { createTextProps, Text } from '../../Text';
import { DividerProps } from '../Divider.types';

/**
 * FIXME: if you want to customize borderStyle, you can do it here:
 * https://dev.to/franciscomendes10866/how-to-create-a-dashed-line-using-react-native-svg-3lip
 * */

export function Vertical(props: DividerProps) {
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
    <Column alignment="center" height="100%" {...containerProps}>
      <Column
        borderWidth={{ l: height }}
        borderColor={color}
        borderRadius={borderRadius}
      />
      {!!textProps && (
        <Text
          preset="Text sm"
          weight="normal"
          padding={{ v: spacing.tiny }}
          {...textProps}
        />
      )}
      {!!textProps && (
        <Column
          borderWidth={{ l: height }}
          borderColor={color}
          borderRadius={borderRadius}
        />
      )}
    </Column>
  );
}
