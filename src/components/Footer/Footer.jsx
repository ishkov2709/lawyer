import SocialList from '../SocialList/SocialList';
import Container from '../common/Container';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container variant="footer">
        <p className={css.title}>Адвокат</p>
        <p className={css.subtitle}>Олександр Нечай</p>
        <SocialList />
      </Container>
    </footer>
  );
};

export default Footer;
