/**
 * Generated by orval v6.6.1 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */

/**
 * アプリ更新情報のレスポンス
 */
export interface AppUpdatesResponse {
  /** アップデートが必要かどうか */
  updateRequired: boolean;
  /** メッセージ */
  message: string;
}
