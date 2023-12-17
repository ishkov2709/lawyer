import { useCallback, useEffect, useState } from 'react';
import SocialList from '../SocialList/SocialList';
import Container from '../common/Container';
import css from './Header.module.css';
import clsx from 'clsx';
const Header = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY) {
      setScrollDirection('down');
    }

    if (currentScrollY < prevScrollY) {
      setScrollDirection('up');
    }

    setPrevScrollY(currentScrollY);
  }, [prevScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY, handleScroll]);

  return (
    <header
      className={clsx(
        scrollDirection === 'up' || prevScrollY === 0
          ? css.header
          : css.hiddenHeader
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
