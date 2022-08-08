export const useSearchBarTodoPage = (inputPageDebounce: string) => {
  const page = Number(inputPageDebounce);
  return {page};
};
