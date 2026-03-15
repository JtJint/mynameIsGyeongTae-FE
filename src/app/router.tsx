import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import AuthLayout from './layouts/AuthLayout';
import LearningLayout from './layouts/LearningLayout';

import LoginPage from '../pages/auth/LoginPage';
import SignupPage from '../pages/auth/SignupPage';
import DashboardPage from '../pages/dashboard/DashboardPage';
import CurriculumPage from '../pages/curriculum/CurriculumPage';
import StageDetailPage from '../pages/curriculum/StageDetailPage';
import LearningPage from '../pages/learning/LearningPage';
import ResultPage from '../pages/result/ResultPage';
import NotFoundPage from '../pages/not-found/NotFoundPage';

const isAuthenticated = () => {
  const token = localStorage.getItem('accessToken');
  return Boolean(token);
};

function ProtectedRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

function PublicOnlyRoute() {
  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
    errorElement: <NotFoundPage />,
  },

  {
    element: <PublicOnlyRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: '/login',
            element: <LoginPage />,
          },
          {
            path: '/signup',
            element: <SignupPage />,
          },
        ],
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: '/dashboard',
            element: <DashboardPage />,
          },
          {
            path: '/curriculum',
            element: <CurriculumPage />,
          },
          {
            path: '/curriculum/:stageId',
            element: <StageDetailPage />,
          },
          {
            path: '/result/:sessionId',
            element: <ResultPage />,
          },
        ],
      },
      {
        element: <LearningLayout />,
        children: [
          {
            path: '/learning/:sessionId',
            element: <LearningPage />,
          },
        ],
      },
    ],
  },

  {
    path: '*',
    element: <NotFoundPage />,
  },
]);