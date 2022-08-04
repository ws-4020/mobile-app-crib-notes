import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';

import {useSearchFormTodoInputPage} from '../client-states/useSearchFormTodoInputPage';
import {useSearchFormTodoSearchTodoUseCase} from '../use-cases/useSearchFormTodoSearchTodoUseCase';
import {useSearchFormTodoTodosUseCase} from '../use-cases/useSearchFormTodoTodosUseCase';

export const SearchFormTodoDemoPage: React.FC = () => {
  const {isFetching, isError, data} = useSearchFormTodoTodosUseCase();
  const [inputPage, setInputPage] = useSearchFormTodoInputPage();
  const {searchTodo} = useSearchFormTodoSearchTodoUseCase();

  const todos = data?.data.content;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Input placeholder="ページ番号" value={inputPage} onChangeText={setInputPage} />
        <View style={styles.search}>
          <Button title="検索" onPress={searchTodo} />
        </View>
        {isFetching && <ActivityIndicator color="#0000ff" />}
        {isError && <Text>TODO一覧の取得に失敗しました。</Text>}
        {!isFetching && todos && todos.length === 0 && <Text>TODO一覧の検索結果が0件です。</Text>}
        {!isFetching &&
          todos &&
          todos.map(todo => {
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
