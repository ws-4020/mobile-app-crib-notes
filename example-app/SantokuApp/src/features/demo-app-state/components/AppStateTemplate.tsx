import React, {useRef} from 'react';
import {FlatList} from 'react-native';

import {StateChangedEventRecord} from '../types/StateChangedEventRecord';
import {AppStateHistoryListItem} from './AppStateHistoryListItem';

type AppStateTemplateProps = {
  history: StateChangedEventRecord[];
  keyExtractor: (item: StateChangedEventRecord, index: number) => string;
  testID?: string;
};

export const AppStateTemplate: React.FC<React.PropsWithChildren<AppStateTemplateProps>> = ({history, keyExtractor, testID}) => {
  const listRef = useRef<FlatList<StateChangedEventRecord>>(null);
  return (
    <FlatList
      ref={listRef}
      data={history}
      renderItem={({item}) => <AppStateHistoryListItem item={item} />}
      keyExtractor={keyExtractor}
      onContentSizeChange={() => listRef.current?.scrollToEnd()}
      testID={testID}
    />
  );
};
