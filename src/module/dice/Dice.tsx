import { ImageSourcePropType } from 'react-native';

export type Dice = {
  faces: ImageSourcePropType[];
  current: number;
};