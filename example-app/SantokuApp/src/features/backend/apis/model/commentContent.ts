/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */

/**
 * コメント内容
 */
export interface CommentContent {
  /** コメントID */
  readonly commentId: string;
  /** コメント内容 */
  content: string;
  /** コメント日時 */
  datetime: string;
  /** いいね数 */
  likes: number;
}
