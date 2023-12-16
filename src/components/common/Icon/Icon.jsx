import css from "./Icon.module.css";

const Icon = ({ name, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href="name"></use>
    </svg>
  );
};

export default Icon;
