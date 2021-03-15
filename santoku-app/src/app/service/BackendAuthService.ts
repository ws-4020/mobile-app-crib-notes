// eslint-disable-next-line @typescript-eslint/no-empty-function
const refreshCsrfToken = async () => {};

const signup = async (_userName: string, _password: string) => {
  return Promise.resolve();
};

const login = async (_userName: string, _password: string) => {
  return Promise.resolve();
};

const logout = async () => {
  return Promise.resolve();
};

export const BackendAuthService = {
  signup,
  login,
  logout,
  refreshCsrfToken,
};
