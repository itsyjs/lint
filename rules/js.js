import { defineFlatConfig } from 'eslint-define-config'
import StylePlugin from '@stylistic/eslint-plugin'
import globals from 'globals'

const ecmaVersion = 2023
const sourceType = 'module'
const ON = 'error'

export const js = defineFlatConfig({
  plugins: { style: StylePlugin },
  languageOptions: {
    ecmaVersion, sourceType,
    parserOptions: { ecmaVersion, sourceType },
    globals: {
      ...globals.browser,
      ...globals.es2021,
      ...globals.nodeBuiltin,
    }
  },
  rules: {
    'no-undef': [ON],
    'style/array-bracket-newline': [ON, 'consistent'],
    'style/array-bracket-spacing': ON,
    'style/array-element-newline': [ON, 'consistent'],
    'style/arrow-spacing': [ON, { before: true, after: true }],
    'style/block-spacing': ON,
    'style/brace-style': [ON, '1tbs', { allowSingleLine: true }],
    'style/comma-dangle': [ON, 'always-multiline'],
    'style/comma-spacing': ON,
    'style/computed-property-spacing': ON,
    'style/func-call-spacing': ON,
    'style/function-call-argument-newline': [ON, 'consistent'],
    'style/implicit-arrow-linebreak': ON,
    'style/indent': [ON, 2, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral *'] }],
    'style/key-spacing': ON,
    'style/keyword-spacing': ON,
    'style/linebreak-style': ON,
    'style/multiline-ternary': [ON, 'always-multiline'],
    'style/no-mixed-spaces-and-tabs': ON,
    'style/no-multi-spaces': ON,
    'style/no-multiple-empty-lines': ON,
    'style/no-trailing-spaces': ON,
    'style/no-whitespace-before-property': ON,
    'style/nonblock-statement-body-position': ON,
    'style/object-curly-spacing': [ON, 'always'],
    'style/quotes': [ON, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'style/rest-spread-spacing': ON,
    'style/semi': [ON, 'never', { beforeStatementContinuationChars: 'always' }],
    'style/space-in-parens': ON,
    'style/space-infix-ops': ON,
    'style/spaced-comment': ON
  }
})
