import { GeneratedColors, LevelDifficultyType } from '../types/types';
import getColorNameFromDifficulty from './color-namer/getColorNameFromDifficulty';

export interface Props {
  colorHexes : GeneratedColors
  difficulty : LevelDifficultyType
}

const getColorNames = ({colorHexes, difficulty} : Props) => {
  if(!colorHexes && !difficulty){ return []; }

  const colorNames: GeneratedColors = [];
  
  colorHexes.map((hex) => { colorNames.push(getColorNameFromDifficulty({hex, difficulty})); })

  return colorNames
}

export default getColorNames;
