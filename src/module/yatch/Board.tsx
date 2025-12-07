export type Board = {
  ones: number;
  twos: number;
  threes: number;
  fours: number;
  fives: number;
  sixes: number;
  bonus: number;

  fullHouse: number;
  fourKind: number;
  smallStraight: number;
  largeStraight: number;
  yacht: number;
  choice: number;
};

export const initialBoard: Board = {
  ones: 0,
  twos: 0,
  threes: 0,
  fours: 0,
  fives: 0,
  sixes: 0,
  bonus: 0,
  fullHouse: 0,
  fourKind: 0,
  smallStraight: 0,
  largeStraight: 0,
  yacht: 0,
  choice: 0,
};