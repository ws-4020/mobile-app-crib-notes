/**
 * Generated by orval v6.17.0 🍺
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
