import { Board } from './Board';
import { BehaviorSubject } from 'rxjs';


class BoardManager {
    private boardSubject: BehaviorSubject<Board>;

    constructor(board: Board) {
        this.boardSubject = new BehaviorSubject(board);
    }

    get board$() {
        return this.boardSubject.asObservable();
    }

    get board() {
        return this.boardSubject.getValue();
    }


    set board(newBoard: Board) {
        this.boardSubject.next(newBoard);
    }

    update(key: keyof Board, value: number) {
        const updated = { ...this.board, [key]: value };
        this.boardSubject.next(updated);
    }

}

export { BoardManager };
