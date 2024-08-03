import { LevelDifficultyType } from '../types/types';
import getColorNameFromDifficulty from './color-namer/getColorNameFromDifficulty';

export interface Props {
  color       : string;
  hex         : string;
  difficulty  : LevelDifficultyType;
}

const isColorHexMatch = ({color, hex, difficulty}:Props) =>{
  return color === getColorNameFromDifficulty({hex, difficulty})
};

export default isColorHexMatch;
