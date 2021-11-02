import React from 'react';
import {useNavigateToDemoStackScreen} from 'screens/useNavigateToScreen';

import {TeamDetailTemplate} from './TeamDetailTemplate';

const ScreenName = 'TeamDetail';
const Screen: React.FC = () => {
  const onGoToDemoScreen = useNavigateToDemoStackScreen('Demo');

  return <TeamDetailTemplate testID="TeamDetailScreen" onGoToDemoScreen={onGoToDemoScreen} />;
};

export const TeamDetailScreen = {
  component: Screen,
  name: ScreenName,
  options: {
    title: 'チーム詳細',
  },
};
