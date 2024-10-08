import { forwardRef, Ref, useState } from 'react';
import { TextInput } from 'react-native';
import { TextField, TextFieldProps } from '../TextField';
import { useTheme } from '@/theme/hooks';
import { Icon } from '../../Icon';

export const PasswordField = forwardRef(function PasswordField(
  props: TextFieldProps,
  _ref: Ref<TextInput>
) {
  const theme = useTheme();

  const { disabled } = props;
  const [showPassword, setShowPassword] = useState(false);
  const iconEye = showPassword ? 'eye-off' : 'eye';
  const iconColor = disabled
    ? theme.colors.palette.neutral[200]
    : theme.colors.palette.primary.main;

  return (
    <TextField
      secureTextEntry={!showPassword}
      RightAccessory={(props) => (
        <Icon
          name={iconEye}
          containerStyle={props.style}
          color={iconColor}
          onPress={!disabled ? () => setShowPassword(!showPassword) : undefined}
        />
      )}
      {...props}
    />
  );
});
