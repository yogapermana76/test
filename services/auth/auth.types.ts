import { BaseResponse, BaseServiceOptions } from '../api.types';

export type OptionsSignIn = Pick<
  BaseServiceOptions<
    undefined,
    undefined,
    {
      emailOrPhone: string;
      password: string;
    }
  >,
  'body'
>;

export type ResponseSignIn = BaseResponse<{
  token: string;
}>;
