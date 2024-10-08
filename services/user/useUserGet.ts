import { useQuery } from '@tanstack/react-query';
import { userKeys } from './user.keys';
import { customerApi } from './user';

export const useUserGet = () => {
  return useQuery({
    queryKey: userKeys.all,
    queryFn: customerApi.customerGet,
  });
};
