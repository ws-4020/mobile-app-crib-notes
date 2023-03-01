import React from 'react';
import RNQRCode, {QRCodeProps as RNQRCodeProps} from 'react-native-qrcode-svg';

type QRCodeProps = RNQRCodeProps;
export const QRCode: React.FC<QRCodeProps> = (props: QRCodeProps) => {
  return <RNQRCode {...props} />;
};
