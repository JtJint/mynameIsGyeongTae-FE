import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { useAuthStore } from '../features/auth/store/authStore';
import { setupInterceptors } from '../shared/api/interceptors';

export default function App() {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);

  useEffect(() => {
    initializeAuth();
    setupInterceptors();
  }, [initializeAuth]);

  return <RouterProvider router={router} />;
}
