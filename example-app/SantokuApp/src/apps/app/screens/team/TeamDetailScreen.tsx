import {useNavigateToDemoStackScreen} from 'apps/app/use-cases/useNavigateToScreenUseCase';
import {TeamDetailPage} from 'features/team/components/TeamDetailPage';
import React, {useMemo} from 'react';

export const TeamDetailScreen: React.FC = () => {
  const onGoToDemoScreen = useNavigateToDemoStackScreen('DemoMenu');
  const navigation = useMemo(() => ({goToDemo: onGoToDemoScreen}), [onGoToDemoScreen]);
  return <TeamDetailPage navigation={navigation} />;
};
