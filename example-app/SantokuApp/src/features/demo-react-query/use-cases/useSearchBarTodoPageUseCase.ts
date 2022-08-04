export const useSearchBarTodoPageUseCase = (inputPageDebounce: string) => {
  const page = Number(inputPageDebounce);
  return {page};
};
