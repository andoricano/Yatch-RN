import React from "react";
import { YatchBoardManager } from "./YatchBoardManager";
import { Subscription } from "rxjs";
import { StyleSheet, View } from "react-native";
import { TurnScoreHedaerWidget } from "../header/turn/TurnScoreHeaderWidget";
import { YatchBoardWidget } from "./YatchBoardWidget";

interface boardLayoutProps {
    boardManager: YatchBoardManager;
    backgroundColor?: string;
}

export class YatchBoardLayout extends React.Component<boardLayoutProps> {
    boardManager: YatchBoardManager;
    subscription!: Subscription;

    constructor(props: boardLayoutProps) {
        super(props);
        this.boardManager = props.boardManager;
    }


    render() {
        const testUserQueue: User[] = [
            { id: 1, name: "Player1" },
            { id: 2, name: "Player2" },
            { id: 3, name: "Player3" },
        ];
        return (
            <View style={styles.container}>
                <TurnScoreHedaerWidget
                    userQueue={testUserQueue}
                    pointerCallback={(pointer) => {
                        // 필요하면 여기서 처리
                        console.log("pointer:", pointer);
                    }}
                />
                <YatchBoardWidget boardManager={this.boardManager}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'stretch',
    }
}
)