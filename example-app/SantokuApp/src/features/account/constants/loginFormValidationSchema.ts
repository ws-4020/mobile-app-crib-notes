import {m} from 'bases/message/Message';
import {yup} from 'bases/validator';

export const loginFormValidationSchema = yup.object().shape({
  accountId: yup.string().label(m('アカウントID')).required(),
  password: yup.string().label(m('パスワード')).required().loginPassword(),
});
