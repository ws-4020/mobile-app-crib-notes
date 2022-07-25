import {m} from 'bases/message/utils/Message';
import {yup} from 'bases/validator';

export const profileFormValidationSchema = yup.object().shape({
  nickname: yup.string().label(m('ニックネーム')).required().max(50),
});
