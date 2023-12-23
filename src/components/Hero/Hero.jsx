import Button from '../common/Button';
import Container from '../common/Container';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.section} id="hero">
      <Container>
        <h1 className={css.title}>Адвокат</h1>
        <span className={css.separator}></span>
        <p className={css.fullName}>Нечай Олександр Дмитрович</p>
        <p className={css.city}>м. Миколаїв</p>
        <div className={css.buttonContainer}>
          <Button
            link={true}
            href="#form"
            title="ОТРИМАТИ БЕЗКОШТОВНУ КОНСУЛЬТАЦІЮ"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
