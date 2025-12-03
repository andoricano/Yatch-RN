import { Dice } from './Dice'
import { BehaviorSubject } from 'rxjs';


class DiceManager {
    private diceSubject: BehaviorSubject<Dice[]>;

    constructor(diceList: Dice[]) {
        this.diceSubject = new BehaviorSubject([...diceList]);
    }

    get dice$() {
        return this.diceSubject.asObservable();
    }

    get dice() {
        return this.diceSubject.getValue();
    }


    startRolling(changing?: number[]) {
        const toChange = changing?.length ? [...changing] : this.dice.map((_, i) => i);
        const currentDice = [...this.dice];

        for (let i = 0; i < toChange.length; i++) {
            if (toChange[i] < currentDice.length) {
                currentDice[toChange[i]].current = Math.floor(Math.random() * 6) + 1;
            }
        }

        this.diceSubject.next(currentDice);
    }


    setDice(idx: number, value: number) {
        if (idx >= this.dice.length || value < 1 || value > 6) {
            return;
        }

        const currentDice = [...this.dice];

        currentDice[idx] = {
            ...currentDice[idx],
            current: value
        };

        this.diceSubject.next(currentDice);
    }
}

export { DiceManager };
