import { defineFlatConfig } from 'eslint-define-config'
import VuePlugin from 'eslint-plugin-vue'

const ON = 'error'

export const vue = defineFlatConfig([
  ...VuePlugin.configs['flat/recommended'],
  {
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
  }
])
