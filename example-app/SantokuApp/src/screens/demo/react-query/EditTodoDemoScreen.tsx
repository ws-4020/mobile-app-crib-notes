import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from 'components/button/Button';
import {useLoadingOverlay} from 'components/overlay';
import {useDeleteTodoService, useGetTodoService, usePutTodoService} from 'framework/backend';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Input, Text} from 'react-native-elements';

type Props = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'EditTodoDemo';
const Screen: React.FC<Props> = ({navigation, route}) => {
  const todoId = route.params.todoId;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  const loadingOverlay = useLoadingOverlay();
  const {isLoading, isSuccess, data: todo} = useGetTodoService(todoId);
  const putTodo = usePutTodoService();
  const deleteTodo = useDeleteTodoService();

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
        loadingOverlay.setVisible(true);
        const data = {title, description};
        await putTodo.mutateAsync({todoId, data});
        loadingOverlay.setVisible(false);
        setIsEdit(false);
      } catch (e) {
        loadingOverlay.setVisible(false);
      }
    }
  }, [title, description, loadingOverlay, putTodo, todoId]);

  const onDelete = useCallback(async () => {
    try {
      loadingOverlay.setVisible(true);
      await deleteTodo.mutateAsync({todoId});
      loadingOverlay.setVisible(false);
      navigation.goBack();
    } catch (e) {
      loadingOverlay.setVisible(false);
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
