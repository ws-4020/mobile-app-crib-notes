import {yup} from 'bases/validator';
import {useFormik} from 'formik';
import {useCallback} from 'react';

import {DataType} from '../types/DataType';

export type FormValues = {
  notificationTitle: string;
  notificationBody: string;
  badgeCount: string;
  collapseKey: string;
  data: DataType[];
  contentAvailable: boolean;
  priority?: string;
  interruptionLevel?: string;
  relevanceScore: string;
  channelId?: string;
};

const formValidationSchema = yup.object().shape({
  badgeCount: yup.number().label('バッチ数').min(0).integer().typeError('${label}は数値を入力してください。'),
  relevanceScore: yup.number().label('RelevanceScore').min(0).max(1).typeError('${label}は数値を入力してください。'),
});

export const formInitialValues: FormValues = {
  notificationTitle: '',
  notificationBody: '',
  badgeCount: '',
  collapseKey: '',
  data: [{key: '', value: ''}],
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
      await form.setFieldValue(`data[${index}].key`, value);
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
      await form.setFieldValue('channelId', value);
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
    await form.setFieldValue('data', data);
  }, [form]);

  const removeDataField = useCallback(
    async (index: number) => {
      const values = [...form.values.data];
      values.splice(index, 1);
      await form.setFieldValue('data', values);
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
