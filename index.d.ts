import type { Linter } from 'eslint'

export type Modules = 'js' | 'vue' | 'svelte'

export interface Options {
  /** additional patterns to ignore when linting
   * @default ['dist/*']
   */
  ignorePatterns: string[];
  /**
   * which frameworks to support
   * @default ['js']
   */
  modules: Modules[];
}

declare function itsy(options: Options): Promise<Linter[]>
