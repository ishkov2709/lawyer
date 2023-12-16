import css from './Icon.module.css';

const Icon = ({ path, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={path}></use>
    </svg>
  );
};

export default Icon;
