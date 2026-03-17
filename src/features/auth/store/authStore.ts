import { create } from 'zustand';

type User = {
  name: string;
  email: string;
};

type AuthState = {
  accessToken: string | null;
  user: User | null;
  isAuthenticated: boolean;

  login: (payload: { email: string }) => void;
  signup: (payload: { name: string; email: string }) => void;
  logout: () => void;
  initializeAuth: () => void;
};

const ACCESS_TOKEN_KEY = 'accessToken';
const USER_EMAIL_KEY = 'userEmail';
const USER_NAME_KEY = 'userName';

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  isAuthenticated: false,

  login: ({ email }) => {
    const token = 'temp-access-token';
    const user = {
      name: localStorage.getItem(USER_NAME_KEY) ?? 'User',
      email,
    };

    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    localStorage.setItem(USER_EMAIL_KEY, email);

    set({
      accessToken: token,
      user,
      isAuthenticated: true,
    });
  },

  signup: ({ name, email }) => {
    const token = 'temp-access-token';
    const user = { name, email };

    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    localStorage.setItem(USER_EMAIL_KEY, email);
    localStorage.setItem(USER_NAME_KEY, name);

    set({
      accessToken: token,
      user,
      isAuthenticated: true,
    });
  },

  logout: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(USER_EMAIL_KEY);
    localStorage.removeItem(USER_NAME_KEY);

    set({
      accessToken: null,
      user: null,
      isAuthenticated: false,
    });
  },

  initializeAuth: () => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    const email = localStorage.getItem(USER_EMAIL_KEY);
    const name = localStorage.getItem(USER_NAME_KEY);

    if (token && email) {
      set({
        accessToken: token,
        user: {
          name: name ?? 'User',
          email,
        },
        isAuthenticated: true,
      });
      return;
    }

    set({
      accessToken: null,
      user: null,
      isAuthenticated: false,
    });
  },
}));