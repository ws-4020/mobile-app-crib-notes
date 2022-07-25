import {useFormik} from 'formik';

import {profileFormInitialValues} from '../constants/profileFormInitialValues';
import {profileFormValidationSchema} from '../constants/profileFormValidationSchema';

export const useProfileRegistrationForm = () => {
  const form = useFormik({
    initialValues: profileFormInitialValues,
    validationSchema: profileFormValidationSchema,
    validateOnChange: false,
    onSubmit: () => {},
  });
  return {form};
};
