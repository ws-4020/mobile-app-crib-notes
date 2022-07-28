import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SearchBar as DefaultSearchBar} from 'react-native-elements';

import {useDebounce} from '../hooks/search-bar-todo/useDebounce';
import {useEnabled} from '../hooks/search-bar-todo/useEnabled';
import {useInputPage} from '../hooks/search-bar-todo/useInputPage';
import {usePage} from '../hooks/search-bar-todo/usePage';
import {useListTodo} from '../hooks/todo/useListTodo';

// 次の不具合で型エラーがでるため暫定対処
// https://stackoverflow.com/questions/68401996/typescript-error-when-using-searchbar-from-react-native-elements
const SearchBar = DefaultSearchBar as unknown as React.FC<any>;

export const SearchBarTodoDemoPage: React.FC = () => {
  const [inputPage, setInputPage] = useInputPage();
  const inputPageDebounce = useDebounce(inputPage, 500);
  const {page} = usePage(inputPageDebounce);
  const {enabled} = useEnabled(page);
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
