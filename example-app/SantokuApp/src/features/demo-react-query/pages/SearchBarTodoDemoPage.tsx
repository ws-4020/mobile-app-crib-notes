import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SearchBar as DefaultSearchBar} from 'react-native-elements';

import {useSearchBarTodoInputPage} from '../client-states/useSearchBarTodoInputPage';
import {useListTodo} from '../services/useListTodo';
import {useSearchBarTodoDebounceUseCase} from '../use-cases/useSearchBarTodoDebounceUseCase';
import {useSearchBarTodoEnabledUseCase} from '../use-cases/useSearchBarTodoEnabledUseCase';
import {useSearchBarTodoPageUseCase} from '../use-cases/useSearchBarTodoPageUseCase';

// 次の不具合で型エラーがでるため暫定対処
// https://stackoverflow.com/questions/68401996/typescript-error-when-using-searchbar-from-react-native-elements
const SearchBar = DefaultSearchBar as unknown as React.FC<any>;

export const SearchBarTodoDemoPage: React.FC = () => {
  const [inputPage, setInputPage] = useSearchBarTodoInputPage();
  const inputPageDebounce = useSearchBarTodoDebounceUseCase(inputPage, 500);
  const {page} = useSearchBarTodoPageUseCase(inputPageDebounce);
  const {enabled} = useSearchBarTodoEnabledUseCase(page);
  const {isFetching, isError, data} = useListTodo({page}, {enabled});
  const todos = data?.data.content;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar placeholder="ページ番号" value={inputPage} onChangeText={setInputPage} />
        {isFetching && <ActivityIndicator color="#0000ff" />}
        {isError && <Text>TODO一覧の取得に失敗しました。</Text>}
        {todos && todos.length === 0 && <Text>TODO一覧の検索結果が0件です。</Text>}
        {todos?.map(todo => {
          return <Text key={todo.id}>{todo.title}</Text>;
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
