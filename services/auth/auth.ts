import { apiInstance } from '../api';
import { OptionsSignIn, ResponseSignIn } from './auth.types';

const signIn = ({ body }: OptionsSignIn) =>
  apiInstance.post<ResponseSignIn>('auth/signin', body);

export const authApi = {
  signIn,
};
