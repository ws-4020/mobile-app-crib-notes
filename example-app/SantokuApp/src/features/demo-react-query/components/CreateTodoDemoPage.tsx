import {Button} from 'bases/ui/components/button/Button';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

import {useChangeDescriptionUseCase} from '../hooks/create-todo/useChangeDescriptionUseCase';
import {useChangeTitleUseCase} from '../hooks/create-todo/useChangeTitleUseCase';
import {useDescription} from '../hooks/create-todo/useDescription';
import {useRegisterTodoUseCase} from '../hooks/create-todo/useRegisterTodoUseCase';
import {useTitle} from '../hooks/create-todo/useTitle';

export type CreateTodoDemoPageProps = {
  replaceToEditTodoDemo: (todoId: number) => void;
};
export const CreateTodoDemoPage: React.FC<CreateTodoDemoPageProps> = ({replaceToEditTodoDemo}) => {
  const [title] = useTitle();
  const [description] = useDescription();
  const {changeTitle} = useChangeTitleUseCase();
  const {changeDescription} = useChangeDescriptionUseCase();
  const {registerTodo, isLoading} = useRegisterTodoUseCase(replaceToEditTodoDemo);

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
