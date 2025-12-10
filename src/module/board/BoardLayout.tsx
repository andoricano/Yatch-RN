import React from "react";
import { YatchBoardManager } from "./yatch/YatchBoardManager";
import { Subscription } from "rxjs";

interface boardLayoutProps {
    boardManager: YatchBoardManager;
    backgroundColor?: string;
}

export class BoardLayout extends React.Component<boardLayoutProps> {
    boardManager: YatchBoardManager;
    subscription!: Subscription;

    constructor(props: boardLayoutProps) {
        super(props);
        this.boardManager = props.boardManager;
    }

}