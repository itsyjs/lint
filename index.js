import { defineFlatConfig } from 'eslint-define-config'
import * as rules from '#rules'

export const itsy = ({ ignorePatterns = [] } = {}) => defineFlatConfig([
  { ignores: ['dist/*', ...ignorePatterns] },
  ...Object.values(rules)
])
