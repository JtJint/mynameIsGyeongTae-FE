import { apiClient } from '../../../shared/api/client';
import { ENDPOINTS } from '../../../shared/api/endpoints';

export type LoginRequest = {
  email: string;
  password: string;
};

export type SignupRequest = {
  name: string;
  email: string;
  password: string;
};

export type AuthUser = {
  name: string;
  email: string;
};

export type AuthResponse = {
  accessToken: string;
  user: AuthUser;
};

export async function loginApi(payload: LoginRequest) {
  const response = await apiClient.post<AuthResponse>(
    ENDPOINTS.auth.login,
    payload,
  );

  return response.data;
}

export async function signupApi(payload: SignupRequest) {
  const response = await apiClient.post<AuthResponse>(
    ENDPOINTS.auth.signup,
    payload,
  );

  return response.data;
}

export async function getMeApi() {
  const response = await apiClient.get<AuthUser>(ENDPOINTS.auth.me);
  return response.data;
}