import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from 'components/button/Button';
import {useLoadingOverlay} from 'components/overlay';
import {useMutationWithResetQueries} from 'framework/backend';
import {getListTodoByCursorQueryKey, usePostTodo} from 'generated/sandbox/api';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

import {EditTodoDemoScreen} from './EditTodoDemoScreen';

type Props = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'CreateTodoDemo';
const Screen: React.FC<Props> = ({navigation}) => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const loadingOverlay = useLoadingOverlay();
  const postTodo = useMutationWithResetQueries(usePostTodo, [getListTodoByCursorQueryKey()]);

  const onChangeTitle = useCallback((newTitle: string) => {
    setTitle(newTitle);
  }, []);

  const onChangeDescription = useCallback((newDescription: string) => {
    setDescription(newDescription);
  }, []);

  const onSubmit = useCallback(() => {
    if (title && description) {
      loadingOverlay.setVisible(true);
      const data = {title, description};
      postTodo
        .mutateAsync({data})
        .then(todo => {
          loadingOverlay.setVisible(false);
          navigation.replace(EditTodoDemoScreen.name, {todoId: todo.id});
        })
        .catch(() => {
          loadingOverlay.setVisible(false);
        });
    }
  }, [title, description, loadingOverlay, postTodo, navigation]);

  return (
    <View style={styles.container}>
      <Input label="Title" onChangeText={onChangeTitle}>
        {title}
      </Input>
      <Input label="Description" onChangeText={onChangeDescription}>
        {description}
      </Input>
      <View style={styles.buttons}>
        <Button title="Submit" onPress={onSubmit} loading={postTodo.isLoading} containerStyle={styles.button} />
      </View>
    </View>
  );
};

export const CreateTodoDemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
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
