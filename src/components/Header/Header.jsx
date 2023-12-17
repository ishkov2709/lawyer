import css from './Header.module.css';
import clsx from 'clsx';
import Container from '../common/Container';
import classNames from 'classnames';
import SocialList from '../SocialList/SocialList';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollStatus, setScrollStatus] = useState(false);

  useEffect(() => {
    if (scrollStatus) {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      }

      if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
      }

      setPrevScrollY(currentScrollY);
      setScrollStatus(false);
    }
  }, [scrollStatus, prevScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollStatus(true);
    });
  }, []);

  return (
    <header
      className={classNames(
        clsx(scrollDirection !== 'up' && prevScrollY > 300 && css.hidden),
        css.header
      )}
    >
      <Container variant="header">
        <a href="#hero">
          <p className={css.logoText}>Олександр Нечай</p>
        </a>
        <div className={css.connectWrapper}>
          <a href="tel:+380669216883" className={css.phone}>
            +38 066 921 68 83
          </a>
          <SocialList />
        </div>
      </Container>
    </header>
  );
};

export default Header;
