/**
 * Generated by orval v6.5.1 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */

/**
 * チーム招待
 */
export interface TeamInvitation {
  /** 招待コード */
  invitationCode?: string;
  /** 有効期限 */
  readonly expirationDate?: string;
}
