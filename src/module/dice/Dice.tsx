import { ImageSourcePropType } from 'react-native';

export type Dice = {
  faces: ImageSourcePropType[];
  current: number;
};

export const diceFaces: ImageSourcePropType[] = [
  require('../../../rsc/dice_1.png'),
  require('../../../rsc/dice_2.png'),
  require('../../../rsc/dice_3.png'),
  require('../../../rsc/dice_4.png'),
  require('../../../rsc/dice_5.png'),
  require('../../../rsc/dice_6.png'),
];

export const initialDice: Dice[] = Array.from({ length: 5 }, () => ({
  faces: diceFaces,
  current: 1,
}));