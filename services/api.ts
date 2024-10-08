import Axios, { AxiosError, AxiosInstance } from 'axios';
import { ApiResponse } from './api.types';
import { getGeneralApiProblem, getProblemFromError } from './apiProblem';
import { loadString } from '@/utils/storage';

export const apiInstance: AxiosInstance = Axios.create({
  baseURL: 'https://api.example.com',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiInstance.interceptors.request.use((config) => {
  const token = loadString('authToken');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiInstance.interceptors.response.use(
  (response) => {
    const customResponse: ApiResponse = { ...response, kind: 'ok' };
    return customResponse;
  },
  (error: AxiosError) => {
    const problem = getProblemFromError(error);
    const apiProblem = getGeneralApiProblem(
      problem ?? 'UNKNOWN_ERROR',
      error.status ?? 0
    );
    const customResponse: ApiResponse = { ...error.response, ...apiProblem };
    error.response = customResponse;
    return Promise.reject(error);
  }
);
