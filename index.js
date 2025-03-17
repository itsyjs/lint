import { getRules } from '#rules'

export const itsy = async ({ ignorePatterns = [], modules = ['js'] } = {}) => ([
  { ignores: ['dist/*', ...ignorePatterns] },
  ...(await getRules(modules))
])
