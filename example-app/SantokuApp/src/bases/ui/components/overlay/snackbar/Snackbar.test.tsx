import {render, screen, waitFor} from '@testing-library/react-native';
import {BundledMessagesLoader} from 'bases/message/utils/BundledMessageLoader';
import {loadMessages} from 'bases/message/utils/Message';
import React, {useEffect} from 'react';
import {Text, TextStyle} from 'react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {Snackbar, WithSnackbar} from './Snackbar';

function getStyle<T>(instance: ReactTestInstance) {
  return instance.props.style as T;
}

jest.useFakeTimers();

type UseSnackbarType = 'show' | 'showWithCloseButton' | 'hide';

const ChildComponent: React.FC<{type: UseSnackbarType}> = ({type}) => {
  useEffect(() => {
    switch (type) {
      case 'show':
        Snackbar.show('テストメッセージ', {messageTextStyle: {color: 'blue'}});
        break;
      case 'showWithCloseButton':
        Snackbar.showWithCloseButton('テストメッセージ', {messageTextStyle: {color: 'red'}});
        break;
      case 'hide':
        Snackbar.hide();
    }
  }, [type]);

  return <Text testID="text">test</Text>;
};

describe('WithSnackbar', () => {
  it('useSnackbarのshowで、Snackbarが正常に表示されることを確認', () => {
    render(
      <WithSnackbar>
        <ChildComponent type="show" />
      </WithSnackbar>,
    );

    expect(screen.queryByText('テストメッセージ')).not.toBeNull();
    expect(getStyle<TextStyle>(screen.getByText('テストメッセージ')).color).toBe('blue');
    expect(screen.queryByText('閉じる')).toBeNull();
    expect(screen).toMatchSnapshot();
  });

  it('useSnackbarのshowWithCloseButtonで、ボタン付きSnackbarが正常に表示されることを確認', async () => {
    await loadMessages(new BundledMessagesLoader());

    render(
      <WithSnackbar>
        <ChildComponent type="showWithCloseButton" />
      </WithSnackbar>,
    );

    expect(screen.queryByText('テストメッセージ')).not.toBeNull();
    expect(getStyle<TextStyle>(screen.getByText('テストメッセージ')).color).toBe('red');
    expect(screen.queryByText('閉じる')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });

  it('useSnackbarのhideで、Snackbarが消えることを確認', async () => {
    render(
      <WithSnackbar>
        <ChildComponent type="show" />
      </WithSnackbar>,
    );

    screen.update(
      <WithSnackbar>
        <ChildComponent type="hide" />
      </WithSnackbar>,
    );

    await waitFor(() => {
      const HIDE_FADE_OUT_DURATION = 300;
      jest.advanceTimersByTime(HIDE_FADE_OUT_DURATION);
      expect(screen.queryByText('テストメッセージ')).toBeNull();
      expect(screen.queryByText('閉じる')).toBeNull();
      expect(screen).toMatchSnapshot();
    });
  });
});
