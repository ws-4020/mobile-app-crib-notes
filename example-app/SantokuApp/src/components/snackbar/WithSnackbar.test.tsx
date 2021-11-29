import {render, waitFor} from '@testing-library/react-native';
import {BundledMessagesLoader, loadMessages} from 'framework';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {Snackbar} from '.';

import {WithSnackbar, useSnackbar} from './WithSnackbar';

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'android',
}));

jest.useFakeTimers();

type UseSnackbarType = 'show' | 'showWithCloseButton' | 'hide';

const ChildComponent: React.FC<{type: UseSnackbarType}> = ({type}) => {
  const snackbar = useSnackbar();

  useEffect(() => {
    switch (type) {
      case 'show':
      case 'showWithCloseButton':
        snackbar[type]('テストメッセージ');
        break;
      case 'hide':
        snackbar.hide();
    }
  }, [snackbar, type]);

  return <Text testID="text">test</Text>;
};

describe('WithSnackbar', () => {
  it('useSnackbarのshowで、Snackbarが正常に表示されることを確認', () => {
    const renderResult = render(
      <WithSnackbar>
        <ChildComponent type="show" />
      </WithSnackbar>,
    );

    expect(renderResult.queryByText('テストメッセージ')).not.toBeNull();
    expect(renderResult.queryByText('閉じる')).toBeNull();
    expect(renderResult).toMatchSnapshot();
  });

  it('useSnackbarのshowWithCloseButtonで、ボタン付きSnackbarが正常に表示されることを確認', async () => {
    await loadMessages(new BundledMessagesLoader());

    const renderResult = render(
      <WithSnackbar>
        <ChildComponent type="showWithCloseButton" />
      </WithSnackbar>,
    );

    expect(renderResult.queryByText('テストメッセージ')).not.toBeNull();
    expect(renderResult.queryByText('閉じる')).not.toBeNull();
    expect(renderResult).toMatchSnapshot();
  });

  it('useSnackbarのhideで、Snackbarが消えることを確認', async () => {
    const renderResult = render(
      <WithSnackbar>
        <ChildComponent type="show" />
      </WithSnackbar>,
    );

    renderResult.update(
      <WithSnackbar>
        <ChildComponent type="hide" />
      </WithSnackbar>,
    );

    await waitFor(() => {
      jest.advanceTimersByTime(300);
      expect(renderResult.queryByText('テストメッセージ')).toBeNull();
      expect(renderResult.queryByText('閉じる')).toBeNull();
      expect(renderResult).toMatchSnapshot();
    });
  });
});
