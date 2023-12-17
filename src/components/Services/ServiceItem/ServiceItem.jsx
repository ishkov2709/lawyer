import css from './ServiceItem.module.css';

const ServiceItem = ({ url, description }) => {
  return (
    <li className={css.serviceItem}>
      <img src={url} alt={description} className={css.serviceImg} />
      <p className={css.serviceText}>{description}</p>
    </li>
  );
};

export default ServiceItem;
