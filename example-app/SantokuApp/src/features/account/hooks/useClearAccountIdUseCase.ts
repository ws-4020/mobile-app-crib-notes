import {FormikProps} from 'formik';
import {useCallback} from 'react';

import {LoginForm} from '../types/LoginForm';

export const useClearAccountIdUseCase = (form: FormikProps<LoginForm>) => {
  const clearAccountId = useCallback(() => form.setFieldValue('accountId', ''), [form]);
  return {clearAccountId};
};