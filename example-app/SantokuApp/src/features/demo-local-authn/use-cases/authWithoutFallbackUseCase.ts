import {LocalAuthentication} from 'bases/local-authentication/utils/LocalAuthentication';

export const authWithoutFallbackUseCase = async () => {
  const result = await LocalAuthentication.authenticate({
    promptMessage: 'Test Message',
    disableDeviceFallback: true,
    cancelLabel: 'キャンセル', // FallbackをOFFにしている場合は必須
  });
  alert(JSON.stringify(result));
};
