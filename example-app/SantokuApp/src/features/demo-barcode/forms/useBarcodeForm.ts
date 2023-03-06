import {Format} from 'bases/ui/barcode/Barcode';
import {yup} from 'bases/validator';
import {useFormik} from 'formik';
import {useCallback} from 'react';

import {BarcodeCharacter} from '../types/barcodeCharacter';

type FormValues = {
  format: Format;
  code128Data: CODE128DataSet[];
  code128AutoData: string;
  lineWidth: string;
};

type CODE128DataSet = {
  character: BarcodeCharacter;
  value: string;
};

const formValidationSchema = yup.object().shape({
  code128Data: yup.array().of(
    yup.object().shape({
      value: yup
        .string()
        .label('データ')
        .required()
        .when('character', {
          is: 'CODE-A',
          // ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4
          // https://github.com/lindell/JsBarcode/blob/master/src/barcodes/CODE128/constants.js#L35
          then: () => yup.string().matches(/^[\x00-\x5F\xC8-\xCF]+$/, 'CODE-Aでは使用できない文字が含まれています。'),
        })
        .when('character', {
          is: 'CODE-B',
          // ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4
          // https://github.com/lindell/JsBarcode/blob/master/src/barcodes/CODE128/constants.js#L38
          then: () => yup.string().matches(/^[\x20-\x7F\xC8-\xCF]+$/, 'CODE-Bでは使用できない文字が含まれています。'),
        })
        .when('character', {
          is: 'CODE-C',
          // 00–99 (encodes two digits with a single code point) and FNC1
          // https://github.com/lindell/JsBarcode/blob/master/src/barcodes/CODE128/constants.js#L42
          then: () => yup.string().matches(/^(\xCF*[0-9]{2}\xCF*)+$/, 'CODE-Cでは使用できない文字が含まれています。'),
        }),
    }),
  ),
  code128AutoData: yup
    .string()
    .label('データ')
    .required()
    // ASCII value ranges 0-127, 200-211
    // https://github.com/lindell/JsBarcode/blob/master/src/barcodes/CODE128/CODE128_AUTO.js#L7
    .matches(/^[\x00-\x7F\xC8-\xD3]+$/, 'CODE-Cでは使用できない文字が含まれています'),
  lineWidth: yup.number().label('ライン幅').required().max(100).typeError('${path}は数値を入力してください。'),
});

export const formInitialValues: FormValues = {
  format: 'CODE128',
  code128Data: [{character: 'CODE-A', value: '0123456789'}],
  code128AutoData: '0123456789',
  lineWidth: '2',
};

const nop = () => {};
export const useBarcodeForm = () => {
  const form = useFormik({
    initialValues: formInitialValues,
    validationSchema: formValidationSchema,
    validateOnChange: true,
    onSubmit: nop,
  });

  const setFormLineWidth = useCallback(async (value: string) => form.setFieldValue('lineWidth', value), [form]);
  const validateForm = useCallback(
    async (values: Partial<FormValues>) =>
      form.validateForm({
        format: values.format ?? form.values.format,
        code128Data: values.code128Data ?? form.values.code128Data,
        code128AutoData: values.code128AutoData ?? form.values.code128AutoData,
        lineWidth: values.lineWidth ?? form.values.lineWidth,
      }),
    [form],
  );

  return {form, setFormLineWidth, validateForm};
};
