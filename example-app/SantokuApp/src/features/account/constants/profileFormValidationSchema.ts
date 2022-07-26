import {m} from 'bases/message/utils/Message';
import {yup} from 'bases/validator/utils';

export const profileFormValidationSchema = yup.object().shape({
  nickname: yup.string().label(m('ニックネーム')).required().max(50),
});
