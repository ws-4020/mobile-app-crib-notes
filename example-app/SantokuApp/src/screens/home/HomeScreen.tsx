import React from 'react';

import {HomeTemplate} from './HomeTemplate';

const ScreenName = 'Home';
const Screen: React.FC = () => {
  return <HomeTemplate testID="HomeScreen" />;
};

// Navigatorに登録する情報
export const HomeScreen = {
  component: Screen,
  name: ScreenName,
  options: {
    title: 'ホーム',
  },
};
