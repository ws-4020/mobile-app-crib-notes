import React from 'react';

import {MessageTemplate} from '../message/MessageTemplate';
import {useMessage} from '../message/useMessage';

export const MessagePage: React.FC = () => {
  const {info, infoKeyExtractor} = useMessage();
  return <MessageTemplate testID="MessageScreen" items={info} keyExtractor={infoKeyExtractor} />;
};
