import {
  Control,
  FieldPath,
  FieldValues as RHFFieldValues,
} from 'react-hook-form';
import { TextFieldProps } from '..';

export interface CTextFieldProps<FieldValues extends RHFFieldValues>
  extends TextFieldProps {
  control: Control<FieldValues>;
  name: FieldPath<FieldValues>;
}
