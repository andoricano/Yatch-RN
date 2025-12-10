import { YatchBoard } from './YatchBoard';
import { BehaviorSubject } from 'rxjs';


class YatchBoardManager {
    private boardSubject: BehaviorSubject<YatchBoard>;

    constructor(board: YatchBoard) {
        this.boardSubject = new BehaviorSubject(board);
    }

    get board$() {
        return this.boardSubject.asObservable();
    }

    get board() {
        return this.boardSubject.getValue();
    }


    set board(newBoard: YatchBoard) {
        this.boardSubject.next(newBoard);
    }

    update(key: keyof YatchBoard, value: number) {
        const updated = { ...this.board, [key]: value };
        this.boardSubject.next(updated);
    }

}

export { YatchBoardManager };
