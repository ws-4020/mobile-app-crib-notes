import {Button} from 'bases/ui/components/button/Button';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

import {useCreateTodoDemo} from '../react-query/useCreateTodoDemo';

export type CreateTodoDemoPageProps = {
  replaceToEditTodoDemo: (todoId: number) => void;
};
export const CreateTodoDemoPage: React.FC<CreateTodoDemoPageProps> = ({replaceToEditTodoDemo}) => {
  const {title, description, isLoading, onChangeTitle, onChangeDescription, onSubmit} =
    useCreateTodoDemo(replaceToEditTodoDemo);

  return (
    <View style={styles.container}>
      <Input label="Title" onChangeText={onChangeTitle}>
        {title}
      </Input>
      <Input label="Description" onChangeText={onChangeDescription}>
        {description}
      </Input>
      <View style={styles.buttons}>
        <Button title="Submit" onPress={onSubmit} loading={isLoading} containerStyle={styles.button} />
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
