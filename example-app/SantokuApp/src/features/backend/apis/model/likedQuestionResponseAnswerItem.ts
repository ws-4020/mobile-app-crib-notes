/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */

/**
 * いいね済の質問に紐づく回答
 */
export type LikedQuestionResponseAnswerItem = {
  /** いいね済の回答ID */
  answerId?: string;
  /** 回答にいいね済か */
  liked?: boolean;
  /** いいね済の回答コメントID */
  commentId?: string[];
};
