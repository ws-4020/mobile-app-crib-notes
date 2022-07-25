import {useFormik} from 'formik';

import {loginFormInitialValues} from '../constants/loginFormInitialValues';
import {loginFormValidationSchema} from '../constants/loginFormValidationSchema';

export const useLoginForm = () => {
  const form = useFormik({
    initialValues: loginFormInitialValues,
    validationSchema: loginFormValidationSchema,
    validateOnChange: false,
    onSubmit: () => {},
  });
  return {form};
};
