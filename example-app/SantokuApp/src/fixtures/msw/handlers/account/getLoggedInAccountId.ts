export const getLoggedInAccountId = () => {
  if (!accountId) {
    throw new LoggedInAccountIdNotFound('Logged in account not found.');
  }
  return accountId;
};

export class LoggedInAccountIdNotFound extends Error {}

export function isLoggedInAccountIdNotFound(error: unknown): error is LoggedInAccountIdNotFound {
  return error instanceof LoggedInAccountIdNotFound;
}

export let accountId: string;

export const setLoggedInAccountId = (id: string) => {
  accountId = id;
};
