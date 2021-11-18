import {waitFor} from '@testing-library/react-native';

import {initialize, hideSplashScreen} from './Initialize';

describe('initialize', () => {
  it('navigatorOptionsが返されること', async () => {
    await expect(initialize()).resolves.toEqual({
      RootStackNav: {
        initialRouteName: 'TermsOfServiceAgreement',
      },
    });
  });
});

describe('hideSplashScreen', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('200ms経ってからスプラッシュスクリーンが閉じられること', async () => {
    hideSplashScreen().catch(() => {
      throw new Error('Failed to hide splash screen.');
    });
    expect(__mocks.expoSplashScreen.hideAsync).not.toHaveBeenCalled();
    // 200ms経過してから、スプラッシュスクリーンを閉じる
    jest.advanceTimersByTime(200);
    await waitFor(() => {
      expect(__mocks.expoSplashScreen.hideAsync).toHaveBeenCalled();
    });
  });

  it('スプラッシュスクリーンを閉じるのに失敗しても何もしないこと', async () => {
    __mocks.expoSplashScreen.hideAsync.mockImplementationOnce(() =>
      Promise.reject(new Error('Splash screen is already closed')),
    );
    hideSplashScreen().catch(() => {
      throw new Error('Failed to hide splash screen.');
    });
    jest.advanceTimersByTime(200);
    await waitFor(() => {
      expect(__mocks.expoSplashScreen.hideAsync).toHaveBeenCalled();
    });
  });
});
