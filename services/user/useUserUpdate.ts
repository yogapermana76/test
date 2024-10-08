import { useMutation } from '@tanstack/react-query';
import { customerApi } from './user';
import { ErrorResponse } from '../api.types';
import { userKeys } from './user.keys';
import { queryClient } from '@/libs';

export const useCustomerUpdate = () => {
  return useMutation({
    mutationFn: customerApi.customerUpdate,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: userKeys.all });
      console.tron.log('useCustomerUpdate', response);
    },
    onError: (error: ErrorResponse) => {
      console.tron.error('useCustomerUpdate', error);
    },
  });
};
