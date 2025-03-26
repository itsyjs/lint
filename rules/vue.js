import VuePlugin from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import { mergeWithCore } from './core.js'

const ON = 'error'

export const vue = defineConfig([
  ...VuePlugin.configs['flat/recommended'],
  mergeWithCore({
    rules: {
      'vue/html-indent': ON,
      'vue/html-end-tags': ON,
      'vue/html-self-closing': [ON, { html: { void: 'always' } }],
      'vue/component-name-in-template-casing': [ON, 'kebab-case'],
      'vue/attribute-hyphenation': ON,
      'vue/html-quotes': ON,
      'vue/no-spaces-around-equal-signs-in-attribute': ON,
      'vue/no-multi-spaces': ON,
      'vue/multi-word-component-names': ON,
      'vue/require-default-prop': 'off'
    }
  })
])
