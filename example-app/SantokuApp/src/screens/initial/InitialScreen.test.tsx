import {StackActions} from '@react-navigation/routers';
import '@testing-library/jest-native/extend-expect';
import {render, waitFor} from '@testing-library/react-native';
import {BundledMessagesLoader, loadMessages} from 'framework';
import React from 'react';

import {InitialScreen} from './InitialScreen';

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

beforeEach(() => {
  jest.useFakeTimers();
});

describe('InitialScreen', () => {
  it('マウントされたときに正常にレンダリングされること', () => {
    const app = render(<InitialScreen.component />);
    expect(app.queryByTestId('InitialScreen')).not.toBeNull();
    expect(app).toMatchSnapshot();
  });

  it('利用規約未同意の場合に利用規約画面へ遷移すること', async () => {
    render(<InitialScreen.component />);
    await waitFor(() => {
      expect(__mocks.navigation.dispatch).toHaveBeenCalledWith(StackActions.replace('TermsOfServiceAgreement'));
    });
  });

  // TODO: 利用規約同意済みの場合にホーム画面へ遷移することのテスト(API呼び出し対応後)
  // TODO: 利用規約同意状態の取得に失敗した場合にエラーダイアログが表示され、OKを押すとアプリが終了すること(API呼び出し対応後)

  it('処理完了後200ms経ってからスプラッシュスクリーンが閉じられること', async () => {
    render(<InitialScreen.component />);
    expect(__mocks.expoSplashScreen.hideAsync).not.toHaveBeenCalled();
    jest.advanceTimersByTime(200);
    await waitFor(() => {
      expect(__mocks.expoSplashScreen.hideAsync).toHaveBeenCalled();
    });
  });
});
