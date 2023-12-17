import SocialList from '../SocialList/SocialList';
import Container from '../common/Container';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container variant="footer">
        <div className={css.infoBox}>
          <p>Адвокат</p>
          <p>«Олександр Нечай»</p>
          <p>Всі права захищені</p>
          <p>&#169;2023</p>
        </div>
        <SocialList />
      </Container>
    </footer>
  );
};

export default Footer;
