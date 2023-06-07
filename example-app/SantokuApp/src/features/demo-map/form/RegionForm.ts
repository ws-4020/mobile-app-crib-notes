import {yup} from 'bases/validator';
import {FormikHelpers, useFormik} from 'formik';

export type RegionFormValues = {
  latitude: string;
  longitude: string;
  latitudeDelta: string;
  longitudeDelta: string;
};

type RegionFormParams = {
  initialValues: RegionFormValues;
  onSubmit: (values: RegionFormValues, formikHelpers: FormikHelpers<RegionFormValues>) => void | Promise<any>;
};

const defaultRegion = {
  latitude: '34.7024898',
  longitude: '135.494',
  latitudeDelta: '0.005',
  longitudeDelta: '0.002',
};

export const useRegionForm = (
  params: RegionFormParams = {
    initialValues: defaultRegion,
    onSubmit: () => {},
  },
) => {
  const form = useFormik<RegionFormValues>({
    initialValues: params.initialValues,
    validationSchema: yup.object().shape({
      latitude: yup.number().label('緯度').min(-90).max(90),
      longitude: yup.number().label('経度').min(-180).max(180),
      latitudeDelta: yup.number().label('緯度範囲').min(0).max(180),
      longitudeDelta: yup.number().label('経度範囲').min(0).max(360),
    }),
    validateOnChange: false,
    onSubmit: params.onSubmit,
  });

  return {form};
};
