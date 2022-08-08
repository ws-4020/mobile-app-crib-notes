import {Button} from 'bases/ui/button/Button';
import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Input, Text} from 'react-native-elements';

import {useEditTodoDescription} from '../client-states/useEditTodoDescription';
import {useEditTodoIsEdit} from '../client-states/useEditTodoIsEdit';
import {useEditTodoTitle} from '../client-states/useEditTodoTitle';
import {useEditTodoChangeDescription} from '../use-cases/useEditTodoChangeDescription';
import {useEditTodoChangeTitle} from '../use-cases/useEditTodoChangeTitle';
import {useEditTodoEdit} from '../use-cases/useEditTodoEdit';
import {useEditTodoRemove} from '../use-cases/useEditTodoRemove';
import {useEditTodoSave} from '../use-cases/useEditTodoSave';
import {useEditTodoSetTodo} from '../use-cases/useEditTodoSetTodo';
import {useEditTodoTodo} from '../use-cases/useEditTodoTodo';

export type EditTodoDemoPageType = {
  goBack: () => void;
  todoId: number;
};
export const EditTodoDemoPage: React.FC<EditTodoDemoPageType> = ({goBack, todoId}) => {
  const {save, isLoading: isSaving} = useEditTodoSave(todoId);
  const {edit} = useEditTodoEdit();
  const {remove, isLoading: isRemoving} = useEditTodoRemove(todoId, goBack);
  const [title] = useEditTodoTitle();
  const [description] = useEditTodoDescription();
  const [isEdit] = useEditTodoIsEdit();
  const {changeTitle} = useEditTodoChangeTitle();
  const {changeDescription} = useEditTodoChangeDescription();
  const {data: todo, isLoading, isSuccess} = useEditTodoTodo(todoId);

  const {setTodo} = useEditTodoSetTodo(todoId);
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
