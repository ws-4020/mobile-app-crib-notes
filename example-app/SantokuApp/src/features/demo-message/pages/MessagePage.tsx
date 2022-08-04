import React from 'react';

import {MessageTemplate} from '../components/MessageTemplate';
import {messages} from '../constants/messages';
import {messageKeyExtractor} from '../utils/messageKeyExtractor';

export const MessagePage: React.FC = () => {
  return <MessageTemplate testID="MessageScreen" items={messages} keyExtractor={messageKeyExtractor} />;
};
