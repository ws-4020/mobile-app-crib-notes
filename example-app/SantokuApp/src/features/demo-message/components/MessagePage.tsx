import React from 'react';

import {messages} from '../constants/messages';
import {messageKeyExtractor} from '../utils/messageKeyExtractor';
import {MessageTemplate} from './MessageTemplate';

export const MessagePage: React.FC = () => {
  return <MessageTemplate testID="MessageScreen" items={messages} keyExtractor={messageKeyExtractor} />;
};
