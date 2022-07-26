import {useNavigateToDemoStackScreen} from 'apps/app/hooks/useNavigateToScreen';
import {TeamStackParamList} from 'apps/app/navigators/types';
import {m} from 'bases/message/utils/Message';
import {TeamDetailPage} from 'features/team/components/TeamDetailPage';
import React, {useMemo} from 'react';

const ScreenName = 'TeamDetail';
const Screen: React.FC = () => {
  const onGoToDemoScreen = useNavigateToDemoStackScreen('Demo');
  const navigation = useMemo(() => ({goToDemo: onGoToDemoScreen}), [onGoToDemoScreen]);
  return <TeamDetailPage navigation={navigation} />;
};

export const TeamDetailScreen: StackScreenConfig<TeamStackParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: () => ({
    title: m('チーム詳細'),
  }),
};
