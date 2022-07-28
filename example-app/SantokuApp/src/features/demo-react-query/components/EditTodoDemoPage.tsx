import {Button} from 'bases/ui/components/button/Button';
import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Input, Text} from 'react-native-elements';

import {useChangeDescriptionUseCase} from '../hooks/create-todo/useChangeDescriptionUseCase';
import {useChangeTitleUseCase} from '../hooks/create-todo/useChangeTitleUseCase';
import {useDescription} from '../hooks/edit-todo/useDescription';
import {useEditUseCase} from '../hooks/edit-todo/useEditUseCase';
import {useIsEdit} from '../hooks/edit-todo/useIsEdit';
import {useRemoveUseCase} from '../hooks/edit-todo/useRemoveUseCase';
import {useSaveUseCase} from '../hooks/edit-todo/useSaveUseCase';
import {useSetTodoUseCase} from '../hooks/edit-todo/useSetTodoUseCase';
import {useTitle} from '../hooks/edit-todo/useTitle';
import {useTodo} from '../hooks/edit-todo/useTodo';

export type EditTodoDemoPageType = {
  goBack: () => void;
  todoId: number;
};
export const EditTodoDemoPage: React.FC<EditTodoDemoPageType> = ({goBack, todoId}) => {
  const {save, isLoading: isSaving} = useSaveUseCase(todoId);
  const {edit} = useEditUseCase();
  const {remove, isLoading: isRemoving} = useRemoveUseCase(todoId, goBack);
  const [title] = useTitle();
  const [description] = useDescription();
  const [isEdit] = useIsEdit();
  const {changeTitle} = useChangeTitleUseCase();
  const {changeDescription} = useChangeDescriptionUseCase();
  const {data: todo, isLoading, isSuccess} = useTodo(todoId);

  const {setTodo} = useSetTodoUseCase(todoId);
  useEffect(() => {
    setTodo();
  }, [isEdit, setTodo, todo]);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isSuccess && todo) {
    return (
      <View style={styles.container}>
        <Input label="ID" disabled>
          {todo.data.id}
        </Input>
        <Input label="Title" disabled={!isEdit} onChangeText={changeTitle}>
          {title}
        </Input>
        <Input label="Description" disabled={!isEdit} onChangeText={changeDescription}>
          {description}
        </Input>
        <View style={styles.buttons}>
          {isEdit ? (
            <Button title="Save" onPress={save} loading={isSaving} containerStyle={styles.button} />
          ) : (
            <Button title="Edit" onPress={edit} containerStyle={styles.button} />
          )}
          <Button title="Delete" onPress={remove} loading={isRemoving} containerStyle={styles.button} />
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
