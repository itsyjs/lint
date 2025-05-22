import { getRules } from '#rules'

export const itsy = async ({ ignorePatterns = [], modules = ['js'], extend = [] } = {}) => ([
  { ignores: ['dist/*', ...ignorePatterns] },
  ...(await getRules(modules)),
  ...extend,
])
