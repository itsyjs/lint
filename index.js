import { defineFlatConfig } from 'eslint-define-config'
import { getRules } from '#rules'

export const itsy = async ({ ignorePatterns = [], modules = ['js'] } = {}) => defineFlatConfig([
  { ignores: ['dist/*', ...ignorePatterns] },
  ...(await getRules(modules))
])
