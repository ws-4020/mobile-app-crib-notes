/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */

/**
 * アカウントの種類
 */
export type ProfileType = typeof ProfileType[keyof typeof ProfileType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ProfileType = {
  general: 'general',
  partner: 'partner',
  techlead: 'techlead',
  administrator: 'administrator',
} as const;
