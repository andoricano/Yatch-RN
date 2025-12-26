import { BehaviorSubject, Subscription } from 'rxjs';
import { DiceManager } from '../module/dice/DiceManager';
import { YatchBoard } from '../module/board/yatch/YatchBoard';


class YatchManager {
    private diceManager: DiceManager;
    private subscription: Subscription;
    //private players : Players;

    constructor(diceManaber: DiceManager) {
        this.diceManager = diceManaber;

        this.subscription = this.diceManager.dice$.subscribe(dice => {
            console.log("YatchManager 감지: dice 변경됨 →", dice);

        });
    }

    startRolling() {
        this.diceManager.startRolling();
    }

    setDice(idx: number, value: number) {
        this.diceManager.setDice(idx, value);
    }


    getAllScore(dice: number[]): YatchBoard {
        return {
            ones: getScoreNumber(dice,1),
            twos: getScoreNumber(dice,2),
            threes: getScoreNumber(dice,3),
            fours: getScoreNumber(dice,4),
            fives: getScoreNumber(dice,5),
            sixes: getScoreNumber(dice,6),
            bonus: 0,
            fullHouse: getFullHouse(dice),
            fourKind: getMultiple(dice,4),
            smallStraight: getStraight(dice),
            largeStraight: getStraight(dice),
            yacht: getMultiple(dice,5),
            choice: dice.reduce((acc, cur) => acc + cur, 0),
        };
    }
}

export { YatchManager };
