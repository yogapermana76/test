import { apiInstance } from '../api';
import {
  OptionsUserUpdate,
  ResponseUserGet,
  ResponseUserUpdate,
} from './user.types';

const customerGet = () => apiInstance.get<ResponseUserGet>('user');

const customerUpdate = ({ body }: OptionsUserUpdate) => {
  return apiInstance.put<ResponseUserUpdate>('user', body);
};

export const customerApi = {
  customerGet,
  customerUpdate,
};
