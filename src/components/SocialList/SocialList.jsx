import css from './SocialList.module.css';
import { connection } from '../../images/connection/connection';

const SocialList = () => {
  return (
    <ul className={css.socialList}>
      <li>
        <a
          className={css.socialLink}
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
          className={css.socialLink}
          href="viber://chat?number=380669216883"
          title="Viber"
          target="_blank"
          rel="noreferrer"
        >
          <img src={connection.viber} alt="Viber" width={24} />
        </a>
      </li>
      <li>
        <a
          className={css.socialLink}
          href="https://wa.me/380669216883"
          title="WhatsApp"
          target="_blank"
          rel="noreferrer"
        >
          <img src={connection.whatsapp} alt="WhatsApp" width={24} />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
