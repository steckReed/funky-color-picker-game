import colorNamer from 'color-namer';
import { LevelDifficultyType } from '../../types/types';

interface Props {
  hex       : string;
  difficulty  : LevelDifficultyType;
}

const getColorNameFromDifficulty = ({hex, difficulty}:Props) => {
  switch(difficulty){
    case(1):
      return colorNamer(hex).basic[0].name
    ;
    case(2):
      return colorNamer(hex).html[0].name
    ;
    case(3):
      return colorNamer(hex).ntc[0].name
    ;
    default:
      return 'unknown difficulty...'
    ;
  }
};

export default getColorNameFromDifficulty;
