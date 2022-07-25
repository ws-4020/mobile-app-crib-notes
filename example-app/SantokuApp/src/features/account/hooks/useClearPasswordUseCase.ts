import {FormikProps} from 'formik';
import {useCallback} from 'react';

import {LoginForm} from '../types/LoginForm';

export const useClearPasswordUseCase = (form: FormikProps<LoginForm>) => {
  const clearPassword = useCallback(() => form.setFieldValue('password', ''), [form]);
  return {clearPassword};
};
