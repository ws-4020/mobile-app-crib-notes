import {Config} from './Config';

describe('Config', function () {
  it('react-native-configの値が取得されること', () => {
    expect(Config.appIdFlavorSuffix).toBe('.test');
    expect(Config.appNameHome).toBe('Test SantokuApp');
    expect(Config.provisioningProfileFlavor).toBe('Not Available');
  });

  it('jest.spyOnでモックの値を上書きできること', () => {
    jest.spyOn(Config, 'appNameHome', 'get').mockReturnValue('string');
    expect(Config.appIdFlavorSuffix).toBe('.test');
    expect(Config.appNameHome).toBe('string');
    expect(Config.provisioningProfileFlavor).toBe('Not Available');
  });
});
