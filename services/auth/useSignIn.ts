import { useMutation } from '@tanstack/react-query';
import { authApi } from './auth';
import { ErrorResponse } from '../api.types';
import { queryClient } from '@/libs';
import { useStores } from '@/models';
import { userKeys } from '../user';

export const useSignIn = () => {
  const {
    authStore: { login },
  } = useStores();

  return useMutation({
    mutationFn: authApi.signIn,
    onSuccess: (response) => {
      const { token } = response.data.data;
      login(token);
      queryClient.invalidateQueries({ queryKey: userKeys.all });
    },
    onError: (error: ErrorResponse) => {
      console.tron.error('Sign-in error', error);
    },
  });
};
