/**
 * Generated by orval v6.9.3 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */
import type {GetListQuestionsSort} from './getListQuestionsSort';
import type {GetListQuestionsFilter} from './getListQuestionsFilter';

export type GetListQuestionsParams = {
  keyword?: string;
  sort?: GetListQuestionsSort;
  filter?: GetListQuestionsFilter;
  tag?: string;
};
