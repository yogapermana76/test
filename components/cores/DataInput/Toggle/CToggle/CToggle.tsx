import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { Toggle } from '../Toggle';
import { CToggleProps } from './CToggle.types';

export const CToggle = <T extends FieldValues>({
  control,
  name,
  ...toggleProps
}: CToggleProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => (
        <Toggle
          value={field.value as boolean}
          onValueChange={field.onChange}
          onBlur={field.onBlur}
          error={fieldState.isTouched ? fieldState.error?.message : undefined}
          {...toggleProps}
          disabled={
            formState.isSubmitting ||
            formState.isLoading ||
            toggleProps.disabled
          }
        />
      )}
    />
  );
};
