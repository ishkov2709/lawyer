import { object, string } from 'yup';

const latinCyrillicPattern = /^(?! )[A-Za-z\u00C0-\u024F\u0400-\u04FF ]+(?! )$/;
const phoneNumberPattern = /\d{1,4}\s?\d{1,4}\s?\d{1,9}/;

export const callbackFormShema = object().shape({
  fullName: string().required().matches(latinCyrillicPattern),
  phone: string().required().matches(phoneNumberPattern).min(10),
});
