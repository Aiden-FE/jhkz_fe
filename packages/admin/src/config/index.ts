export const APP_ENV = {
  version: '1.0',
  isProd: process.env.ENV === 'prod',
  apiHost: '/api'
}

export const CONTEXT_KEY = 'USER_CONTEXT'