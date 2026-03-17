import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { apiClient } from './client';

const ACCESS_TOKEN_KEY = 'accessToken';

function onRequest(config: InternalAxiosRequestConfig) {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}

function onRequestError(error: AxiosError) {
  return Promise.reject(error);
}

function onResponse(response: AxiosResponse) {
  return response;
}

function onResponseError(error: AxiosError) {
  if (error.response?.status === 401) {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');

    window.location.href = '/login';
  }

  return Promise.reject(error);
}

export function setupInterceptors() {
  apiClient.interceptors.request.use(onRequest, onRequestError);
  apiClient.interceptors.response.use(onResponse, onResponseError);
}