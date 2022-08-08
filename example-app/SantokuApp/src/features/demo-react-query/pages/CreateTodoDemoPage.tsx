import {Button} from 'bases/ui/button/Button';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

import {useCreateTodoDescription} from '../client-states/useCreateTodoDescription';
import {useCreateTodoTitle} from '../client-states/useCreateTodoTitle';
import {useCreateTodoChangeDescriptionUseCase} from '../use-cases/useCreateTodoChangeDescriptionUseCase';
import {useCreateTodoChangeTitleUseCase} from '../use-cases/useCreateTodoChangeTitleUseCase';
import {useCreateTodoRegisterTodoUseCase} from '../use-cases/useCreateTodoRegisterTodoUseCase';

export type CreateTodoDemoPageProps = {
  replaceToEditTodoDemo: (todoId: number) => void;
};
export const CreateTodoDemoPage: React.FC<CreateTodoDemoPageProps> = ({replaceToEditTodoDemo}) => {
  const [title] = useCreateTodoTitle();
  const [description] = useCreateTodoDescription();
  const {changeTitle} = useCreateTodoChangeTitleUseCase();
  const {changeDescription} = useCreateTodoChangeDescriptionUseCase();
  const {registerTodo, isLoading} = useCreateTodoRegisterTodoUseCase(replaceToEditTodoDemo);

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
