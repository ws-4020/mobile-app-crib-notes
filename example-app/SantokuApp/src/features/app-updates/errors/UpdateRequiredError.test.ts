import {BundledMessagesLoader} from 'bases/message/utils/BundledMessageLoader';
import {loadMessages} from 'bases/message/utils/Message';

import {isUpdateRequiredError, UpdateRequiredError} from './UpdateRequiredError';

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});
beforeEach(() => {
  jest.resetAllMocks();
});

describe('isUpdateRequiredError', () => {
  it('UpdateRequiredError is UpdateRequiredError', () => {
    expect(isUpdateRequiredError(new UpdateRequiredError('dummy', '0.0.1'))).toBeTruthy();
  });
});
