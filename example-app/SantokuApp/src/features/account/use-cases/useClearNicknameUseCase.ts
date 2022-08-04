import {FormikProps} from 'formik';
import {useCallback} from 'react';

import {ProfileForm} from '../types/ProfileForm';

export const useClearNicknameUseCase = (form: FormikProps<ProfileForm>) => {
  const clearNickname = useCallback(() => form.setFieldValue('nickname', ''), [form]);
  return {clearNickname};
};
