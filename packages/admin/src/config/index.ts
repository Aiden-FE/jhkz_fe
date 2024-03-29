import { version } from '~/../package.json'

export const APP_ENV = {
  version,
  isProd: process.env.ENV === 'prod',
  apiHost: '/api/admin/v1'
}

export const CONTEXT_KEY = 'USER_CONTEXT'
