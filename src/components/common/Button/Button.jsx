import css from './Button.module.css';

const Button = ({
  link = false,
  href = '',
  title,
  type = 'button',
  action,
  width = '100%',
  disabled = false,
}) => {
  if (!link)
    return (
      <button
        type={type}
        style={{ width: width }}
        className={css.button}
        onClick={action}
        disabled={disabled}
      >
        {title}
      </button>
    );
  if (link)
    return (
      <a href={href} className={css.button} style={{ width: width }}>
        {title}
      </a>
    );
};

export default Button;
