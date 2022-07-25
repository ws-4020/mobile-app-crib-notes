import {m} from 'bases/message';
import {yup} from 'bases/validator';

export type ProfileForm = {
  nickname: string;
};

export const profileFormInitialValues = {
  nickname: '',
};

export const profileFormValidationSchema = yup.object().shape({
  nickname: yup.string().label(m('ニックネーム')).required().max(50),
});
