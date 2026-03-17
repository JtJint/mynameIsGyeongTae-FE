export const ENDPOINTS = {
  auth: {
    login: '/auth/login',
    signup: '/auth/signup',
    me: '/auth/me',
    logout: '/auth/logout',
  },
  curriculum: {
    stages: '/curriculum/stages',
    stageDetail: (stageId: string | number) => `/curriculum/stages/${stageId}`,
  },
  session: {
    create: '/sessions',
    detail: (sessionId: string | number) => `/sessions/${sessionId}`,
    analyze: (sessionId: string | number) => `/sessions/${sessionId}/analyze`,
    result: (sessionId: string | number) => `/sessions/${sessionId}/result`,
  },
  dashboard: {
    summary: '/dashboard',
  },
} as const;