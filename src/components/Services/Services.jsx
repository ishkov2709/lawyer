import { servicesImg } from '../../images/services/servicesImg';
import Container from '../common/Container';
import ServiceItem from './ServiceItem';
import css from './Services.module.css';

const Services = () => {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>Послуги</h2>
        <ul className={css.serviceList}>
          {servicesImg.map(({ url, description }, i) => (
            <ServiceItem key={i} url={url} description={description} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Services;
