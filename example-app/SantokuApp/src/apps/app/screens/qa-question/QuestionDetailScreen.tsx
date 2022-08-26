import {QuestionDetailPage} from 'features/qa-question/pages/QuestionDetailPage';
import React from 'react';

import {useMainTabShown} from '../../client-states/useMainTabShown';

export const QuestionDetailScreen: React.VFC = () => {
  const [, setMainTabShown] = useMainTabShown();
  return <QuestionDetailPage setMainTabShown={setMainTabShown} />;
};
