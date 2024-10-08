import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { PasswordField } from '../PasswordField';
import { CTextFieldProps } from '../../TextField';

export const CPasswordField = <T extends FieldValues>({
  control,
  name,
  ...textFieldProps
}: CTextFieldProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => (
        <PasswordField
          value={field.value as string}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          error={fieldState.isTouched ? fieldState.error?.message : undefined}
          {...textFieldProps}
          disabled={
            formState.isSubmitting ||
            formState.isLoading ||
            textFieldProps.disabled
          }
        />
      )}
    />
  );
};
