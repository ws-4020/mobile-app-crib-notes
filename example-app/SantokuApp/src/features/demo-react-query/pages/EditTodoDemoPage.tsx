import {Button} from 'bases/ui/button/Button';
import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Input, Text} from 'react-native-elements';

import {useEditTodoDescription} from '../client-states/useEditTodoDescription';
import {useEditTodoIsEdit} from '../client-states/useEditTodoIsEdit';
import {useEditTodoTitle} from '../client-states/useEditTodoTitle';
import {useEditTodoChangeDescriptionUseCase} from '../use-cases/useEditTodoChangeDescriptionUseCase';
import {useEditTodoChangeTitleUseCase} from '../use-cases/useEditTodoChangeTitleUseCase';
import {useEditTodoEditUseCase} from '../use-cases/useEditTodoEditUseCase';
import {useEditTodoRemoveUseCase} from '../use-cases/useEditTodoRemoveUseCase';
import {useEditTodoSaveUseCase} from '../use-cases/useEditTodoSaveUseCase';
import {useEditTodoSetTodoUseCase} from '../use-cases/useEditTodoSetTodoUseCase';
import {useEditTodoTodoUseCase} from '../use-cases/useEditTodoTodoUseCase';

export type EditTodoDemoPageType = {
  goBack: () => void;
  todoId: number;
};
export const EditTodoDemoPage: React.FC<EditTodoDemoPageType> = ({goBack, todoId}) => {
  const {save, isLoading: isSaving} = useEditTodoSaveUseCase(todoId);
  const {edit} = useEditTodoEditUseCase();
  const {remove, isLoading: isRemoving} = useEditTodoRemoveUseCase(todoId, goBack);
  const [title] = useEditTodoTitle();
  const [description] = useEditTodoDescription();
  const [isEdit] = useEditTodoIsEdit();
  const {changeTitle} = useEditTodoChangeTitleUseCase();
  const {changeDescription} = useEditTodoChangeDescriptionUseCase();
  const {data: todo, isLoading, isSuccess} = useEditTodoTodoUseCase(todoId);

  const {setTodo} = useEditTodoSetTodoUseCase(todoId);
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
