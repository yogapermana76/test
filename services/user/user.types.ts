import { BaseResponse, BaseServiceOptions } from '../api.types';
import { IUser } from './user.interface';

export type ResponseUserGet = BaseResponse<IUser>;

export type OptionsUserUpdate = Pick<
  BaseServiceOptions<
    undefined,
    undefined,
    {
      fullname: string;
      picture?: any;
    }
  >,
  'body'
>;

export type ResponseUserUpdate = BaseResponse<undefined>;
