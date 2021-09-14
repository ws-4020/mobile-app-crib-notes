import {NavigationProp, ParamListBase, useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {AppInfoScreen, AppStateScreen, ErrorCaseScreen, InstructionsScreen} from 'screens';

import {DemoLinkItemData} from './DemoLinkItem';
import {DemoTemplate} from './DemoTemplate';

const addOnPressHandlerToItems = (navigation: NavigationProp<ParamListBase>) => (demo: {title: string; to: string}) => {
  return {
    ...demo,
    onPress: () => navigation.navigate(demo.to),
  };
};

const keyExtractor = (item: DemoLinkItemData, index: number) => item.to + index.toString();

const name = 'Demo';
const Screen: React.FC = () => {
  const navigation = useNavigation();
  const demoScreenList = useMemo(
    () => [
      {
        title: 'Application Information',
        to: AppInfoScreen.name,
      },
      {
        title: 'Track AppState',
        to: AppStateScreen.name,
      },
      {
        title: 'GlobalErrorHandling',
        to: ErrorCaseScreen.name,
      },
      {
        title: 'React Native Instructions',
        to: InstructionsScreen.name,
      },
    ],
    [],
  );
  const demoItems = useMemo(
    () => demoScreenList.map(addOnPressHandlerToItems(navigation)),
    [demoScreenList, navigation],
  );
  return <DemoTemplate testID="DemoScreen" items={demoItems} keyExtractor={keyExtractor} />;
};

export const DemoScreen = {
  component: Screen,
  name,
  options: {
    title: 'Demo Screens',
  },
};
