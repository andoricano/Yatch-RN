import React from "react";
import { YatchBoardManager } from "./yatch/YatchBoardManager";
import { Subscription } from "rxjs";

interface boardWidgetProps {
    boardManager: YatchBoardManager;
    backgroundColor?: string;
}

export class BoardHeader extends React.Component<boardWidgetProps> {
    boardManager: YatchBoardManager;
    subscription!: Subscription;

    constructor(props: boardWidgetProps) {
        super(props);
        this.boardManager = props.boardManager;
    }

}