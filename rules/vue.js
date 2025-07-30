import VuePlugin from 'eslint-plugin-vue'
import { vueTsConfigs, configureVueProject, defineConfigWithVueTs } from '@vue/eslint-config-typescript'
import { mergeWithCore } from './core.js'

const ON = 'error'

configureVueProject({
  // Whether to parse TypeScript syntax in Vue templates.
  tsSyntaxInTemplates: true,

  // Specify the script langs in `.vue` files
  scriptLangs: [
    'ts',
    // Include 'js' to allow plain `<script>` or `<script setup>` blocks.
    // This might result-in false positive or negatives in some rules for `.vue` files.
    // Note you also need to configure `allowJs: true` and `checkJs: true`
    // in corresponding `tsconfig.json` files.
    'js',
  ],

  // Whether to override some `no-unsafe-*` rules to avoid false positives on Vue component operations.
  // Defaults to `true`.
  // Usually you should keep this enabled,
  // but if you're using a metaframework or in a TSX-only project
  // where you're certain you won't operate on `.vue` components in a way that violates the rules,
  // and you want the strictest rules (e.g. when extending from `strictTypeChecked`),
  // you can set this to `false` to ensure the strictest rules apply to all files.
  allowComponentTypeUnsafety: true,
})

export const vue = defineConfigWithVueTs([
  VuePlugin.configs['flat/recommended'],
  vueTsConfigs.base,
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
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/valid-v-slot': 'off',
      'vue/max-attributes-per-line': [ON, {
        singleline: 3,
        multiline: 1
      }]
    }
  })
])
