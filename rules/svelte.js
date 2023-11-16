import { defineFlatConfig } from 'eslint-define-config'
import SvelteParser from 'svelte-eslint-parser'
import SveltePlugin from 'eslint-plugin-svelte'

export const vue = defineFlatConfig({
  plugins: { svelte: SveltePlugin },
  files: ['**/*.svelte'],
  languageOptions: {
    parser: SvelteParser,
    parserOptions: {
      extraFileExtensions: ['.svelte'],
      sourceType: 'module'
    }
  },
  processor: SveltePlugin.processors.svelte,
  rules: {
    ...SveltePlugin.configs.recommended.rules,
    ...SveltePlugin.configs.recommended.rules,
  }
})
