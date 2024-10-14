import {
  Button,
  Column,
  CPasswordField,
  CTextField,
  Screen,
  Spacer,
  Text,
} from '@/components/cores';
import { useHeader } from '@/hooks/useHeader';
import { spacing } from '@/theme';
import { useTheme } from '@/theme/hooks';
import { useForm } from 'react-hook-form';

export default function SignInScreen() {
  const { colors } = useTheme();
  // const { schema, handleLogin, isLoading } = useAuth()

  const form = useForm({
    mode: 'all',
    defaultValues: {
      emailOrPhone: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty },
  } = form;

  useHeader({
    leftIcon: 'chevron-left',
    onLeftPress: () => {},
    title: 'Tab Layout',
  });

  return (
    <Screen preset="auto">
      <Column padding={{ h: spacing.large, v: spacing.medium }}>
        <Column>
          <CTextField
            control={control}
            name="emailOrPhone"
            label="Email or Phone"
            placeholder="Enter your email or phone"
            required
            autoCapitalize="none"
          />
          <Spacer length={spacing.large} />
          <CPasswordField
            control={control}
            name="password"
            placeholder="Enter your password"
            label="Password"
            LabelAccessory={
              <Column alignment="end">
                <Text
                  text="Forgot Password?"
                  preset="Text xs"
                  weight="medium"
                  color={colors.palette.primary.main}
                />
              </Column>
            }
            required
          />
          <Spacer length={spacing.large} />
          <Button
            text="Sign In"
            size="large"
            // loading={isLoading}
            // onPress={handleSubmit(handleLogin)}
            // disabled={!(isValid && isDirty)}
          />
        </Column>
      </Column>
    </Screen>
  );
}
