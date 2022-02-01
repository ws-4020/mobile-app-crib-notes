import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from 'components/button/Button';
import {useLoadingOverlay} from 'components/overlay';
import {
  getGetTodoQueryKey,
  getListTodoByCursorQueryKey,
  useDeleteTodo,
  useGetTodo,
  usePutTodo,
} from 'generated/sandbox/api';
import {DemoStackParamList} from 'navigation/types';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Input, Text} from 'react-native-elements';
import {useQueryClient} from 'react-query';

const ScreenName = 'EditTodoDemo';
const Screen = ({navigation, route}: NativeStackScreenProps<DemoStackParamList, typeof ScreenName>) => {
  const todoId = route.params.todoId.toString();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  const queryClient = useQueryClient();
  const loadingOverlay = useLoadingOverlay();
  const {isLoading, isSuccess, data: todo} = useGetTodo(todoId);
  const putTodo = usePutTodo({
    mutation: {
      onSuccess: async (_data, variables, _context) => {
        await queryClient.resetQueries(getListTodoByCursorQueryKey());
        await queryClient.resetQueries(getGetTodoQueryKey(variables.todoId));
      },
    },
  });
  const deleteTodo = useDeleteTodo({
    mutation: {
      onSuccess: async (_data, _variables, _context) => {
        await queryClient.resetQueries(getListTodoByCursorQueryKey());
      },
    },
  });

  const onEdit = useCallback(() => {
    setIsEdit(true);
  }, []);

  const onChangeTitle = useCallback((newTitle: string) => {
    setTitle(newTitle);
  }, []);

  const onChangeDescription = useCallback((newDescription: string) => {
    setDescription(newDescription);
  }, []);

  const onSave = useCallback(async () => {
    if (title && description) {
      try {
        loadingOverlay.show();
        const data = {title, description};
        await putTodo.mutateAsync({todoId, data});
        loadingOverlay.hide();
        setIsEdit(false);
      } catch (e) {
        loadingOverlay.hide();
      }
    }
  }, [title, description, loadingOverlay, putTodo, todoId]);

  const onDelete = useCallback(async () => {
    try {
      loadingOverlay.show();
      await deleteTodo.mutateAsync({todoId});
      loadingOverlay.hide();
      navigation.goBack();
    } catch (e) {
      loadingOverlay.hide();
    }
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
