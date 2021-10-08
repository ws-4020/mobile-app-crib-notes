import {config} from './Config';

describe('Config', function () {
  it('react-native-configの値が取得されること', () => {
    expect(config.appIdFlavorSuffix).toBe('.test');
    expect(config.appNameHome).toBe('Test SantokuApp');
    expect(config.provisioningProfileFlavor).toBe('Not Available');
  });

  it('jest.spyOnでモックの値を上書きできること', () => {
    jest.spyOn(config, 'appNameHome', 'get').mockReturnValue('string');
    expect(config.appIdFlavorSuffix).toBe('.test');
    expect(config.appNameHome).toBe('string');
    expect(config.provisioningProfileFlavor).toBe('Not Available');
  });
});
