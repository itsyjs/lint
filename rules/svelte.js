import SvelteParser from 'svelte-eslint-parser'
import SveltePlugin from 'eslint-plugin-svelte'
import { defineConfig } from 'eslint/config'

const ON = 'error'

export const svelte = defineConfig({
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
    'svelte/indent': ON,
    'svelte/indent': [ON, { indentScript: false }],
    'svelte/html-closing-bracket-spacing': ON,
    'svelte/html-quotes': ON,
    'svelte/mustache-spacing': ON,
    'svelte/shorthand-attribute': ON,
    'svelte/shorthand-directive': ON
  }
})
