import { BehaviorSubject, Subscription } from 'rxjs';
import { DiceManager } from '../module/dice/DiceManager';


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

    setDice(idx : number, value : number) {
        this.diceManager.setDice(idx, value);
    }
}

export { YatchManager };
