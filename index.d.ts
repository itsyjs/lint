import { FlatESLintConfigItem } from 'eslint-define-config'

export interface Options {
  /** additional patterns to ignore when linting
   * @default ['dist/*']
   */
  ignorePatterns: string[];
}

declare function itsy(options: Options): Promise<FlatESLintConfigItem[]>
