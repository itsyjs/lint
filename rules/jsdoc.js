import JsdocPlugin from 'eslint-plugin-jsdoc'
import { defineConfig } from 'eslint/config'

const ON = 'warn'

export const jsdoc = defineConfig({
  plugins: { jsdoc: JsdocPlugin },
  settings: {
    jsdoc: {
      tagNamePreference: {
        'arg': 'arg'
      }
    }
  },
  rules: {
    'jsdoc/check-alignment': ON,
    'jsdoc/check-param-names': ON,
    'jsdoc/check-property-names': ON,
    'jsdoc/check-tag-names': ON,
    'jsdoc/empty-tags': ON,
    'jsdoc/multiline-blocks': ON,
  }
})
