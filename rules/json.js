import { defineConfig } from 'eslint/config'
import json from '@eslint/json'

export default defineConfig({
  plugins: { json },
  files: ['**/*.json'],
  ignores: ['package-lock.json'],
  language: 'json/json',
  extends: ['json/recommended']
})
