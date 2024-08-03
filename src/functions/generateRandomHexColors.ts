import getRandomHexColor from './getRandomHexColor';

export interface Props {
  count : number;
}

const generateRandomHexColors = ({ count }: Props) => {
  if (count === 0) { return []; }

  const colors = [];
  
  for(let i = 0; i < count; i++){
    colors.push(getRandomHexColor());
  }

  return colors;
};

export default generateRandomHexColors;
