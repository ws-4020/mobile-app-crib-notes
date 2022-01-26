import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from 'components/button/Button';
import {useDeleteTodo, useGetTodo, usePutTodo} from 'framework/backend/api/sandbox';
import {DemoStackParamList} from 'navigation/types';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Input, Text} from 'react-native-elements';

const ScreenName = 'EditTodoDemo';
const Screen = ({navigation, route}: NativeStackScreenProps<DemoStackParamList, typeof ScreenName>) => {
  const todoId = route.params.todoId;
  const {isLoading, isSuccess, data: todo} = useGetTodo(todoId);
  const putTodo = usePutTodo(todoId);
  const deleteTodo = useDeleteTodo(todoId);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  const onEdit = useCallback(() => {
    setIsEdit(true);
  }, []);

  const onChangeTitle = useCallback((newTitle: string) => {
    setTitle(newTitle);
  }, []);

  const onChangeDescription = useCallback((newDescription: string) => {
    setDescription(newDescription);
  }, []);

  const onSave = useCallback(() => {
    if (title && description) {
      const data = {title, description};
      putTodo.mutateAsync(data).finally(() => setIsEdit(false));
    }
  }, [title, description, putTodo]);

  const onDelete = useCallback(() => {
    deleteTodo
      .mutateAsync()
      .then(() => {
        navigation.goBack();
      })
      .catch(() => {});
  }, [deleteTodo, navigation]);

  useEffect(() => {
    if (!isEdit && todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [isEdit, todo]);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isSuccess && todo) {
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
            <Button title="Save" onPress={onSave} containerStyle={styles.button} />
          ) : (
            <Button title="Edit" onPress={onEdit} containerStyle={styles.button} />
          )}
          <Button title="Delete" onPress={onDelete} containerStyle={styles.button} />
        </View>
      </View>
    );
  }

  return <Text>Todo情報の取得に失敗しました。</Text>;
};

export const EditTodoDemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
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
