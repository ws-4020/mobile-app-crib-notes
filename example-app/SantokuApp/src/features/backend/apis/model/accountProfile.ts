/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */
import type {Profile} from './profile';

/**
 * アカウントプロフィール情報
 */
export interface AccountProfile {
  /** アカウントID */
  readonly accountId: string;
  profile?: Profile;
}