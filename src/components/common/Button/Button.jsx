import css from './Button.module.css';

const Button = ({
  link = false,
  href = '',
  title,
  type = 'button',
  action,
  disabled = false,
}) => {
  if (!link)
    return (
      <button
        type={type}
        className={css.button}
        onClick={action}
        disabled={disabled}
      >
        {title}
      </button>
    );
  if (link)
    return (
      <a href={href} className={css.button}>
        {title}
      </a>
    );
};

export default Button;
