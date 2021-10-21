export const getRandomBytes = jest.fn(() => Uint8Array.from([...Array(24).keys()]));
export const getRandomBytesAsync = jest.fn(
  async () => await new Promise((resolve) => resolve(Uint8Array.from([...Array(24).keys()]))),
);
