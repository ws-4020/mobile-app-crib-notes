import CODE128 from 'jsbarcode/src/barcodes/CODE128/CODE128';
import CODE128AUTO from 'jsbarcode/src/barcodes/CODE128/CODE128_AUTO';
import React, {useCallback, useMemo} from 'react';
import {StyleSheet, Text, TextProps, View, ViewProps} from 'react-native';
import {Path, Svg} from 'react-native-svg';

export type Format = 'CODE128' | 'CODE128AUTO';
export const START_CHARACTER_SET = {
  'CODE-A': String.fromCharCode(208),
  'CODE-B': String.fromCharCode(209),
  'CODE-C': String.fromCharCode(210),
};

export const CHARACTER_SET = {
  'CODE-A': String.fromCharCode(204),
  'CODE-B': String.fromCharCode(205),
  'CODE-C': String.fromCharCode(206),
};
const ENCODERS = {
  CODE128,
  CODE128AUTO,
};

export type BarcodeProps = {
  value: string;
  lineWidth?: number;
  maxWidth?: number;
  height?: number;
  format?: Format;
  lineColor?: string;
  background?: string;
  text?: string;
  textProps?: TextProps;
  viewProps?: ViewProps;
  onError?: (err: any) => void;
};

const initialBarcode = {
  bars: '',
  barCodeWidth: 0,
};

const drawRect = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y}h${width}v${height}h-${width}z`;
};

const drawSvgBarCode = (binary: string, width: number, height: number, barCodeWidth: number, maxWidth?: number) => {
  const rects = [];

  const singleBarWidth = maxWidth && barCodeWidth > maxWidth ? maxWidth / binary.length : width;
  let barWidth = 0;
  let x = 0;
  const yFrom = 0;

  for (let b = 0; b < binary.length; b++) {
    x = b * singleBarWidth;
    if (binary[b] === '1') {
      barWidth++;
    } else if (barWidth > 0) {
      rects[rects.length] = drawRect(x - singleBarWidth * barWidth, yFrom, singleBarWidth * barWidth, height);
      barWidth = 0;
    }
  }

  if (barWidth > 0) {
    rects[rects.length] = drawRect(x - singleBarWidth * (barWidth - 1), yFrom, singleBarWidth * barWidth, height);
  }

  return rects;
};

export const Barcode: React.FC<BarcodeProps> = ({
  value = '',
  lineWidth = 2,
  maxWidth,
  height = 100,
  format = 'CODE128',
  lineColor = '#000000',
  background = '#FFFFFF',
  text,
  textProps: {style: textStyle, ...textProps} = {},
  viewProps: {style, ...viewProps} = {},
  onError,
}) => {
  const getEncoder = useCallback(() => {
    const encoder = new ENCODERS[format](value, {
      width: lineWidth,
      format,
      height,
      lineColor,
      background,
    });
    if (!encoder.valid()) {
      throw new Error('Invalid barcode for selected format.');
    }
    return encoder;
  }, [background, format, height, lineColor, value, lineWidth]);

  const {bars, barCodeWidth} = useMemo(() => {
    try {
      const encoder = getEncoder();
      const encoded = encoder.encode();
      const barCodeWidth = encoded.data.length * lineWidth;
      return {
        bars: drawSvgBarCode(encoded.data, lineWidth, height, barCodeWidth, maxWidth).join(' '),
        barCodeWidth: maxWidth && barCodeWidth > maxWidth ? maxWidth : barCodeWidth,
      };
    } catch (error) {
      if (onError) {
        onError(error);
      }
    }
    return initialBarcode;
  }, [getEncoder, lineWidth, height, maxWidth, onError]);

  return (
    <View
      style={StyleSheet.flatten([styles.container, {backgroundColor: background, width: barCodeWidth}, style])}
      {...viewProps}>
      <Svg height={height} width={barCodeWidth} fill={lineColor}>
        <Path d={bars} />
      </Svg>
      {text && (
        <Text style={StyleSheet.flatten([styles.textStyle, textStyle])} {...textProps}>
          {text}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
  },
});
