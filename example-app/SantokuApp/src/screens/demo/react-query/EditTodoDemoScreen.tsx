import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from 'components/button/Button';
import { useLoadingOverlay } from 'components/overlay';
import {useDeleteTodo, useGetTodo, usePutTodo} from 'generated/sandbox/api';
import {DemoStackParamList} from 'navigation/types';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Input, Text} from 'react-native-elements';

const ScreenName = 'EditTodoDemo';
const Screen = ({navigation, route}: NativeStackScreenProps<DemoStackParamList, typeof ScreenName>) => {
  const todoId = route.params.todoId.toString();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  const loadingOverlay = useLoadingOverlay();
  const {isLoading, isSuccess, data: todo} = useGetTodo(todoId);
  const putTodo = usePutTodo();
  const deleteTodo = useDeleteTodo();

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
      loadingOverlay.show();
      const data = {title, description};
      putTodo.mutateAsync({todoId, data}).finally(() => {
        loadingOverlay.hide();
        setIsEdit(false);
      });
    }
  }, [title, description, loadingOverlay, putTodo, todoId]);

  const onDelete = useCallback(() => {
    loadingOverlay.show();
    deleteTodo
      .mutateAsync({todoId})
      .then(() => {
        loadingOverlay.hide();
        navigation.goBack();
      })
      .catch(e => {
        loadingOverlay.hide();
        console.log(e);
      });
  }, [deleteTodo, loadingOverlay, navigation, todoId]);

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
