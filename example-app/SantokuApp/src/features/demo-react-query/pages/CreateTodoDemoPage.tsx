import {Button} from 'bases/ui/button/Button';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

import {useCreateTodoDescription} from '../client-states/useCreateTodoDescription';
import {useCreateTodoTitle} from '../client-states/useCreateTodoTitle';
import {useCreateTodoChangeDescription} from '../use-cases/useCreateTodoChangeDescription';
import {useCreateTodoChangeTitle} from '../use-cases/useCreateTodoChangeTitle';
import {useCreateTodoRegisterTodo} from '../use-cases/useCreateTodoRegisterTodo';

export type CreateTodoDemoPageProps = {
  replaceToEditTodoDemo: (todoId: number) => void;
};
export const CreateTodoDemoPage: React.FC<CreateTodoDemoPageProps> = ({replaceToEditTodoDemo}) => {
  const [title] = useCreateTodoTitle();
  const [description] = useCreateTodoDescription();
  const {changeTitle} = useCreateTodoChangeTitle();
  const {changeDescription} = useCreateTodoChangeDescription();
  const {registerTodo, isLoading} = useCreateTodoRegisterTodo(replaceToEditTodoDemo);

  return (
    <View style={styles.container}>
      <Input label="Title" onChangeText={changeTitle}>
        {title}
      </Input>
      <Input label="Description" onChangeText={changeDescription}>
        {description}
      </Input>
      <View style={styles.buttons}>
        <Button title="Submit" onPress={registerTodo} loading={isLoading} containerStyle={styles.button} />
      </View>
    </View>
  );
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
