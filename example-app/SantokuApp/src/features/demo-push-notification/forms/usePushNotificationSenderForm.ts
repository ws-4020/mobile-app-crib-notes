import {yup} from 'bases/validator';
import {useFormik} from 'formik';
import {useCallback} from 'react';

type FormValues = {
  notificationTitle: string;
  notificationBody: string;
  badgeCount: string;
  collapseKey: string;
  data: DataType[];
  contentAvailable: boolean;
  priority?: string;
  interruptionLevel?: string;
  relevanceScore: string;
  channel?: string;
};

export type DataType = {
  key: string;
  value: string;
};

const formValidationSchema = yup.object().shape({
  data: yup.array().of(
    yup.object().shape({
      key: yup.string().label('キー').required(),
    }),
  ),
  badgeCount: yup.number().label('バッチ数'),
  relevanceScore: yup.number().label('RelevanceScore').min(0).max(1),
});

export const formInitialValues: FormValues = {
  notificationTitle: '',
  notificationBody: '',
  badgeCount: '',
  collapseKey: '',
  data: [],
  contentAvailable: false,
  relevanceScore: '',
};

const nop = () => {};
export const usePushNotificationSenderForm = () => {
  const form = useFormik({
    initialValues: formInitialValues,
    validationSchema: formValidationSchema,
    validateOnChange: true,
    onSubmit: nop,
  });

  const setFormDataKey = useCallback(
    async (value: string, index: number) => {
      await form.setFieldValue(`data[${index}].key`, value, true);
      // 入力があった場合はtouchedにして、バリデーションエラーメッセージを表示をする
      await form.setFieldTouched(`data[${index}].key`, true);
    },
    [form],
  );

  const setFormContentAvailable = useCallback(
    async (value: boolean) => {
      // form.handleChangeだとstring型の更新しかできないので、setFieldValueを使用する
      await form.setFieldValue('contentAvailable', value);
    },
    [form],
  );

  const setFormPriority = useCallback(
    async (value?: string) => {
      await form.setFieldValue('priority', value);
    },
    [form],
  );

  const setFormInterruptionLevel = useCallback(
    async (value?: string) => {
      await form.setFieldValue('interruptionLevel', value);
    },
    [form],
  );

  const setFormChannel = useCallback(
    async (value?: string) => {
      await form.setFieldValue('channel', value);
    },
    [form],
  );

  const addDataField = useCallback(async () => {
    const data = [
      ...form.values.data,
      {
        key: '',
        value: '',
      },
    ];
    await form.setFieldValue('data', data, false);
    // フィールド追加時にバリデーションエラーメッセージが表示されないように、touchedをfalseにする
    await form.setFieldTouched(`data[${data.length - 1}].key`, false, false);
  }, [form]);

  const removeDataField = useCallback(
    async (index: number) => {
      const values = [...form.values.data];
      values.splice(index, 1);
      await form.setFieldValue('data', values, false);

      if (form.touched.data) {
        const touched = form.touched.data;
        touched.splice(index, 1);
        await form.setTouched({...form.touched, data: touched}, false);
      }
      if (Array.isArray(form.errors.data)) {
        const errors = form.errors.data;
        errors.splice(index, 1);
        form.setErrors({...form.errors, data: errors});
      }
    },
    [form],
  );

  return {
    form,
    setFormDataKey,
    setFormContentAvailable,
    setFormPriority,
    setFormInterruptionLevel,
    setFormChannel,
    addDataField,
    removeDataField,
  };
};
