/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */
import type {Question} from './question';
import type {Comment} from './comment';

/**
 * 質問とコメント
 */
export type QuestionAndAnswerQuestion = {
  question: Question;
  /** 質問に対するコメントのリスト */
  commentList: Comment[];
};
