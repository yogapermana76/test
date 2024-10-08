import {
  Control,
  FieldPath,
  FieldValues as RHFFieldValues,
} from 'react-hook-form';
import { ToggleProps } from '..';

export type CToggleProps<FieldValues extends RHFFieldValues> = ToggleProps & {
  control: Control<FieldValues>;
  name: FieldPath<FieldValues>;
};
