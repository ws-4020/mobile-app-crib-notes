/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */

/**
 * 利用規約同意状態
 */
export interface TermsOfServiceAgreementStatus {
  /** 有効な利用規約に同意済みかどうか */
  readonly hasAgreed?: boolean;
  /** 同意した利用規約のバージョン */
  agreedVersion: string;
}
