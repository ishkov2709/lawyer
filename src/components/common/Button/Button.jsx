import css from './Button.module.css';

const Button = ({ title, action, width = '100%' }) => {
  return (
    <button style={{ width: width }} className={css.button} onClick={action}>
      {title}
    </button>
  );
};

export default Button;
