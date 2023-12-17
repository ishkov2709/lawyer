import Container from '../common/Container';
import css from './About.module.css';
import QRCode from 'react-qr-code';

const About = () => {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>Нечай Олександр</h2>
        <QRCode
          className={css.qrCode}
          size="100%"
          value="https://erau.unba.org.ua/profile/81570"
        />
        <a
          className={css.linkReg}
          href="https://erau.unba.org.ua/profile/81570"
          target="_blank"
          rel="noreferrer"
        >
          Посилання на профіль адвоката в Єдиному реєстрі адвокатів України
        </a>
        <ul className={css.featureList}>
          <li className={css.featureItem}>
            <p className={css.featureText}>6 років юридичної практики;</p>
          </li>
          <li className={css.featureItem}>
            <p className={css.featureText}>
              знання та досвід дозволяють досягати чудових результатів;
            </p>
          </li>
          <li className={css.featureItem}>
            <p className={css.featureText}>
              постійно стежу за змінами у законодавстві та не допускаю правової
              неактуальності у своїй роботі.
            </p>
          </li>
          <li className={css.featureItem}>
            <p className={css.featureText}>
              в повному обсязі виконую обіцянки, дані клієнту;
            </p>
          </li>
          <li className={css.featureItem}>
            <p className={css.featureText}>
              виходячи із власної практики розповідаю клієнту про всі тонкощі
              юридичних послуг, що надаються, ризики та очікування;
            </p>
          </li>
          <li className={css.featureItem}>
            <p className={css.featureText}>
              працюю в інтересах клієнта та намагаюсь досягти максимально
              вигідних результатів для нього;
            </p>
          </li>
          <li className={css.featureItem}>
            <p className={css.featureText}>
              принесена користь для клієнта має бути незмірно більшою, ніж його
              використані ресурси.
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default About;
