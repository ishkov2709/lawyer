import Container from '../common/Container';
import Icon from '../common/Icon/Icon';
import css from './Contacts.module.css';

const Contacts = () => {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>Контакти</h2>
        <address className={css.address}>
          <ul className={css.contactList}>
            <li className={css.contactItem}>
              <Icon name="phone" width={60} height={60} fill="#ffffff" />
              <h3 className={css.subtitle}>Телефон</h3>
              <p className={css.contactValue}>+38 066 921 68 83</p>
            </li>
            <li className={css.contactItem}>
              <Icon name="mail" width={60} height={60} fill="#ffffff" />
              <h3 className={css.subtitle}>E-mail</h3>
              <p className={css.contactValue}>aleksandrnechay29@gmail.com</p>
            </li>
            <li className={css.contactItem}>
              <Icon name="message" width={60} height={60} />
              <h3 className={css.subtitle}>Telegram, Viber</h3>
              <p className={css.contactValue}>+38 066 921 68 83</p>
            </li>
          </ul>
        </address>
      </Container>
    </section>
  );
};

export default Contacts;
