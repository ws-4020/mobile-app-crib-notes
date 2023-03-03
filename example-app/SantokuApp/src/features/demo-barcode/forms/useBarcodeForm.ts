import {Format} from 'bases/ui/barcode/Barcode';
import {yup} from 'bases/validator';
import {useFormik} from 'formik';
import {useCallback, useMemo} from 'react';

type FormValues = {
  data: string;
  format: Format;
  size: string;
};

export const formInitialValues: FormValues = {
  data: '0123456789',
  format: 'CODE128',
  size: '200',
};

const nop = () => {};
export const useBarcodeForm = (maxSize: number) => {
  const formValidationSchema = useMemo(
    () =>
      yup.object().shape({
        data: yup.string().label('データ').required(),
        size: yup.number().label('サイズ').required().max(maxSize).typeError('${path}は数値を入力してください。'),
      }),
    [maxSize],
  );

  const form = useFormik({
    initialValues: formInitialValues,
    validationSchema: formValidationSchema,
    validateOnChange: true,
    onSubmit: nop,
  });

  const setFormSize = useCallback(async (value: string) => form.setFieldValue('size', value), [form]);
  const validateForm = useCallback(
    async (values: Partial<FormValues>) =>
      form.validateForm({
        data: values.data ?? form.values.data,
        format: values.format ?? form.values.format,
        size: values.size ?? form.values.size,
      }),
    [form],
  );

  return {form, setFormSize, validateForm};
};
