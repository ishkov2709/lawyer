import css from './Container.module.css';
import classNames from 'classnames';

const Container = ({ variant = 'default', children }) => {
  return (
    <div className={classNames(css.container, css[variant])}>{children}</div>
  );
};

export default Container;
