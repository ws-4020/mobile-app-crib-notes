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

export type CODE128DataSet = {
  character: BarcodeCharacter;
  value: string;
};

const formValidationSchema = yup.object().shape({
  code128Data: yup.array().of(
    yup.object().shape({
      value: yup
        .string()
        .when('character', {
          is: 'CODE-A',
          // ASCII characters 00 to 95 (0–9, A–Z and control codes)
          // https://github.com/lindell/JsBarcode/blob/master/src/barcodes/CODE128/constants.js#L35
          then: () =>
            yup
              .string()
              .label('データ')
              .required()
              .matches(/^[\x00-\x5F]+$/, 'CODE-Aでは使用できない文字が含まれています。'),
        })
        .when('character', {
          is: 'CODE-B',
          // ASCII characters 32 to 127 (0–9, A–Z, a–z)
          // https://github.com/lindell/JsBarcode/blob/master/src/barcodes/CODE128/constants.js#L38
          then: () =>
            yup
              .string()
              .label('データ')
              .required()
              .matches(/^[\x20-\x7F]+$/, 'CODE-Bでは使用できない文字が含まれています。'),
        })
        .when('character', {
          is: 'CODE-C',
          // 00–99 (encodes two digits with a single code point)
          // https://github.com/lindell/JsBarcode/blob/master/src/barcodes/CODE128/constants.js#L42
          then: () =>
            yup
              .string()
              .label('データ')
              .required()
              .matches(
                /^([0-9]{2})+$/,
                'CODE-Cでは使用できない文字が含まれています。もしくは桁数が偶数ではありません。',
              ),
        }),
    }),
  ),
  code128AutoData: yup
    .string()
    .label('データ')
    .required()
    // ASCII value ranges 0-127, 200-211
    // https://github.com/lindell/JsBarcode/blob/master/src/barcodes/CODE128/CODE128_AUTO.js#L7
    .matches(/^[\x00-\x7F\xC8-\xD3]+$/, 'CODE128では使用できない文字が含まれています'),
  lineWidth: yup.number().label('ライン幅').required().min(1).max(100).typeError('${label}は数値を入力してください。'),
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

  const setFormLineWidth = useCallback(async (value: string) => form.setFieldValue('lineWidth', value, true), [form]);
  const setFormCode128Character = useCallback(
    async (value: string, index: number) => form.setFieldValue(`code128Data[${index}].character`, value),
    [form],
  );
  const setFormCode128Value = useCallback(
    async (value: string, index: number) => {
      const errors = await form.setFieldValue(`code128Data[${index}].value`, value, true);
      await form.setFieldTouched(`code128Data[${index}].value`, true);
      return errors;
    },
    [form],
  );
  const setFormCode128AutoData = useCallback(
    async (value: string) => form.setFieldValue('code128AutoData', value, true),
    [form],
  );
  const addCode128DataField = useCallback(async () => {
    const code128Data = [
      ...form.values.code128Data,
      {
        character: formInitialValues.code128Data[0].character,
        value: '',
      },
    ];
    await form.setFieldValue('code128Data', code128Data);
    // フィールド追加時にバリデーションが実施されないように、touchedをfalseにする
    await form.setFieldTouched(`code128Data[${form.values.code128Data.length}].value`, false);
    return code128Data;
  }, [form]);
  const removeCode128DataField = useCallback(
    async (index: number) => {
      const values = [...form.values.code128Data];
      values.splice(index, 1);
      await form.setFieldValue('code128Data', values);

      if (form.touched.code128Data) {
        const touched = form.touched.code128Data;
        touched.splice(index, 1);
        await form.setTouched({...form.touched, code128Data: touched}, false);
      }
      if (Array.isArray(form.errors.code128Data)) {
        const errors = form.errors.code128Data;
        errors.splice(index, 1);
        form.setErrors({...form.errors, code128Data: errors});
      }

      return values;
    },
    [form],
  );

  return {
    form,
    setFormLineWidth,
    setFormCode128Character,
    setFormCode128Value,
    setFormCode128AutoData,
    addCode128DataField,
    removeCode128DataField,
  };
};
