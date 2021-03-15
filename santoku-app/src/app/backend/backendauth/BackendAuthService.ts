const signIn = async (_idToken: string) => {
  return Promise.resolve();
};

const signOut = async () => {
  return Promise.resolve();
};

const ping = async () => {
  return Promise.resolve();
};

export const BackendAuthService = {
  signIn,
  signOut,
  ping,
};
