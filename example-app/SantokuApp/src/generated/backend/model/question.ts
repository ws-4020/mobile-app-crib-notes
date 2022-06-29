/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */

/**
 * 質問情報
 */
export interface Question {
  /** 質問ID */
  readonly questionId: string;
  /** 質問のタイトル */
  title?: string;
  /** 質問内容 */
  content?: string;
  /** 質問に設定されているタグ */
  tags?: string[];
  /** 質問日時 */
  datetime: string;
  /** 初心者か否か */
  beginner: boolean;
  /** 解決済か否か */
  resolved: boolean;
  /** 閲覧数 */
  views: number;
  /** 回答数 */
  answers: number;
  /** いいね数 */
  likes: number;
  /** コメント数 */
  comments: number;
}
