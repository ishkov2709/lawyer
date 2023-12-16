import { connection } from '../../images/connection/connection';
import Container from '../common/Container';
import css from './Header.module.css';
const Header = () => {
  return (
    <header className={css.header}>
      <Container variant="header">
        <a href="#0">
          <p className={css.logoText}>Олександр Нечай</p>
        </a>
        <address className={css.address}>
          <a href="tel:+380669216883" className={css.phone}>
            +38 066 921 68 83
          </a>
          <ul className={css.connectList}>
            <li>
              <a
                className={css.connectLink}
                href="https://t.me/AleksandrNechay"
                title="Telegram"
                target="_blank"
                rel="noreferrer"
              >
                <img src={connection.telegram} alt="Telegram" width={24} />
              </a>
            </li>

            <li>
              <a
                className={css.connectLink}
                href="viber://chat?number=380669216883"
                title="Viber"
                target="_blank"
                rel="noreferrer"
              >
                <img src={connection.viber} alt="Viber" width={24} />
              </a>
            </li>

            <li>
              <a className={css.connectLink} href="#WhatsApp" title="WhatsApp">
                <img src={connection.whatsapp} alt="WhatsApp" width={24} />
              </a>
            </li>
          </ul>
        </address>
      </Container>
    </header>
  );
};

export default Header;
