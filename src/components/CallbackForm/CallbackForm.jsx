import css from './CallbackForm.module.css';
import clsx from 'clsx';
import Button from '../common/Button';
import Container from '../common/Container';
import classNames from 'classnames';
import { Formik } from 'formik';
import { initialValues } from './initialValues';
import { callbackFormShema } from '../../schemas/callbackFormShema';

const CallbackForm = () => {
  const handleSubmitForm = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <section className={css.section} id="form">
      <Container>
        <h2 className={css.title}>Заповніть анкету</h2>
        <h3 className={css.subtitle}>
          і отримайте консультацію з вашого питання
        </h3>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmitForm}
          validationSchema={callbackFormShema}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form className={css.form} onSubmit={handleSubmit}>
              <label className={css.formField}>
                <span className={css.label}>Як вас звати?</span>
                <input
                  name="fullName"
                  type="text"
                  className={clsx(
                    css.input,
                    errors.fullName && values.fullName && css.error
                  )}
                  placeholder="Іванов Іван Іванович"
                  onChange={handleChange}
                  value={values.fullName}
                />
                {errors.fullName && values.fullName && (
                  <span className={css.errorText}>
                    Некорректно введене значення
                  </span>
                )}
              </label>
              <label className={css.formField}>
                <span className={css.label}>Телефон</span>
                <input
                  name="phone"
                  type="number"
                  className={clsx(
                    css.input,
                    errors.phone && values.phone && css.error
                  )}
                  placeholder="380"
                  onChange={handleChange}
                  value={values.phone}
                />

                {errors.phone && values.phone && (
                  <span className={css.errorText}>
                    Некорректно введене значення
                  </span>
                )}
              </label>
              <label className={css.formField}>
                <span className={css.label}>
                  {`Розповісти про ситуацію (не обов'язково)`}
                </span>
                <textarea
                  name="description"
                  className={classNames(css.input, css.textarea)}
                  onChange={handleChange}
                  value={values.description}
                />
              </label>
              <Button
                title="ВІДПРАВИТИ"
                type="submit"
                disabled={Boolean(errors.fullName || errors.phone)}
              />
            </form>
          )}
        </Formik>
      </Container>
    </section>
  );
};

export default CallbackForm;
