import { defineFlatConfig } from 'eslint-define-config'
import VueParser from 'vue-eslint-parser'
import VuePlugin from 'eslint-plugin-vue'

const ON = 'error'

export const vue = defineFlatConfig({
  plugins: { vue: VuePlugin },
  files: ['**/*.vue'],
  languageOptions: {
    parser: VueParser,
    parserOptions: {
      extraFileExtensions: ['.vue'],
      sourceType: 'module'
    }
  },
  processor: VuePlugin.processors['.vue'],
  rules: {
    ...VuePlugin.configs.base.rules,
    ...VuePlugin.configs['vue3-essential'].rules,
    'vue/html-indent': ON,
    'vue/html-end-tags': ON,
    'vue/html-self-closing': [ON, { html: { void: 'always' } }],
    'vue/component-name-in-template-casing': [ON, 'kebab-case'],
    'vue/attribute-hyphenation': ON,
    'vue/html-quotes': ON,
    'vue/no-spaces-around-equal-signs-in-attribute': ON,
    'vue/no-multi-spaces': ON,
    'vue/multi-word-component-names': ON
  }
})
