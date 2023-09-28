import { defineFlatConfig } from 'eslint-define-config'
import * as rules from '#rules'

export const itsy = () => defineFlatConfig(Object.values(rules))
