import {Button} from 'bases/ui/components/button/Button';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Input, Text} from 'react-native-elements';

import {useEditTodoDemo} from '../react-query/useEditTodoDemo';

export type EditTodoDemoPageType = {
  goBack: () => void;
  todoId: number;
};
export const EditTodoDemoPage: React.FC<EditTodoDemoPageType> = ({goBack, todoId}) => {
  const {
    isEdit,
    title,
    description,
    todoQuery,
    todo,
    putTodo,
    deleteTodo,
    onEdit,
    onChangeTitle,
    onChangeDescription,
    onSave,
    onDelete,
  } = useEditTodoDemo({goBack, todoId});

  if (todoQuery.isLoading) {
    return <ActivityIndicator />;
  }

  if (todoQuery.isSuccess && todo) {
    return (
      <View style={styles.container}>
        <Input label="ID" disabled>
          {todo.id}
        </Input>
        <Input label="Title" disabled={!isEdit} onChangeText={onChangeTitle}>
          {title}
        </Input>
        <Input label="Description" disabled={!isEdit} onChangeText={onChangeDescription}>
          {description}
        </Input>
        <View style={styles.buttons}>
          {isEdit ? (
            <Button title="Save" onPress={onSave} loading={putTodo.isLoading} containerStyle={styles.button} />
          ) : (
            <Button title="Edit" onPress={onEdit} containerStyle={styles.button} />
          )}
          <Button title="Delete" onPress={onDelete} loading={deleteTodo.isLoading} containerStyle={styles.button} />
        </View>
      </View>
    );
  }

  return <Text>Todo情報の取得に失敗しました。</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    marginHorizontal: 8,
  },
});
