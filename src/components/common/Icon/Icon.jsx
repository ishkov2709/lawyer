import sprites from '../../../images/sprites.svg';

const Icon = ({
  name,
  width,
  height,
  stroke = '#000000',
  fill = '#000000',
}) => {
  return (
    <svg width={width} height={height} stroke={stroke} fill={fill}>
      <use href={`${sprites}#${name}`}></use>
    </svg>
  );
};

export default Icon;
