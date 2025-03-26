import TSParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import { mergeWithCore } from './core.js'

const ON = 'error'

export const js = ([
  mergeWithCore(defineConfig({
    rules: {
      'no-undef': [ON],
    }
  })),
  mergeWithCore(defineConfig({
    files: ['**/*.ts'],
    languageOptions: { parser: TSParser },
  }))
])
