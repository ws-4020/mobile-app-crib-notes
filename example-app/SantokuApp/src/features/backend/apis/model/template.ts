/**
 * Generated by orval v6.9.3 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */

/**
 * 入力内容のテンプレート
 */
export interface Template {
  /** テンプレートID */
  readonly templateId: string;
  /** テンプレートタイトル */
  title: string;
  /** テンプレート内容 */
  content: string;
}
