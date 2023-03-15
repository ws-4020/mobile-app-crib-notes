import {yup} from 'bases/validator';
import {FormikHelpers, useFormik} from 'formik';

export type MapConfigFormValues = {
  latitude: string;
  longitude: string;
  latitudeDelta: string;
  longitudeDelta: string;
};

type MapConfigFormParams = {
  initialValues: MapConfigFormValues;
  onSubmit: (values: MapConfigFormValues, formikHelpers: FormikHelpers<MapConfigFormValues>) => void | Promise<any>;
};

const defaultRegion = {
  latitude: '34.7024898',
  longitude: '135.494',
  latitudeDelta: '0.005',
  longitudeDelta: '0.002',
};

export const useMapConfigForm = (
  params: MapConfigFormParams = {
    initialValues: defaultRegion,
    onSubmit: () => {},
  },
) => {
  const form = useFormik<MapConfigFormValues>({
    initialValues: params.initialValues,
    validationSchema: yup.object().shape({
      latitude: yup.number().label('緯度').required().min(0).max(180),
      longitude: yup.number().label('経度').required().min(0).max(180),
      latitudeDelta: yup.number().label('緯度範囲').required().min(0).max(180),
      longitudeDelta: yup.number().label('経度範囲').required().min(0).max(180),
    }),
    validateOnChange: false,
    onSubmit: params.onSubmit,
  });

  return {form};
};
