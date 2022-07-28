export const useEnabled = (page: number) => {
  const enabled = Number.isInteger(page) && page > 0;
  return {enabled};
};
