import {m} from 'bases/message/Message';
import {yup} from 'bases/validator';

export const profileFormValidationSchema = yup.object().shape({
  nickname: yup.string().label(m('ニックネーム')).required().max(50),
});
