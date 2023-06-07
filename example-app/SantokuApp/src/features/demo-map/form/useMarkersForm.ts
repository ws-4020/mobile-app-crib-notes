import {yup} from 'bases/validator';
import {FormikHelpers, useFormik} from 'formik';
import {useCallback} from 'react';

export type MarkersFormValues = {
  latitude: string;
  longitude: string;
  title: string;
  description: string;
  draggable: boolean;
};

const markerFormInitialValues = {
  latitude: '',
  longitude: '',
  title: '',
  description: '',
  draggable: false,
};

type MarkersFormParams = {
  onSubmit: (values: MarkersFormValues, formikHelpers: FormikHelpers<MarkersFormValues>) => void | Promise<any>;
};

const markerFormValidationSchema = yup.object().shape({
  latitude: yup.number().label('緯度').min(-90).max(90),
  longitude: yup.number().label('経度').min(-180).max(180),
});

export const useMarkersForm = (
  params: MarkersFormParams = {
    onSubmit: () => {},
  },
) => {
  const form = useFormik<MarkersFormValues>({
    initialValues: markerFormInitialValues,
    validationSchema: markerFormValidationSchema,
    validateOnChange: true,
    onSubmit: params.onSubmit,
  });

  const setMarkersFormDraggable = useCallback((value: boolean) => form.setFieldValue('draggable', value), [form]);

  return {
    form,
    setMarkersFormDraggable,
  };
};
