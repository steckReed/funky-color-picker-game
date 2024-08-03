
export type LevelDifficultyType = 1 | 2 | 3;

export type GeneratedColors = string[]

export interface LevelProps {
  difficulty  : LevelDifficultyType;
  count       : number;
  selectColor : string | undefined;
  streak      : number;
  best        : number;
}
