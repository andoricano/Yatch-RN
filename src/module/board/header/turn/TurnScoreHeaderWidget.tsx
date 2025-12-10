import React from "react";
import { TurnScoreUser } from "./TurnScoreUser";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


interface TurnScoreHedaerProps {
    userQueue: User[],
    pointerCallback: (pointer: number) => void;
}

export class TurnScoreHedaerWidget extends React.Component<TurnScoreHedaerProps> {
    state = {
        pointer: 0,
    };

    movePointer = (dir: number) => {
        const { userQueue, pointerCallback } = this.props;
        const next = (this.state.pointer + dir + userQueue.length) % userQueue.length;
        this.setState({ pointer: next });
        pointerCallback(next);
    };

    render() {
        const { userQueue } = this.props;
        const { pointer } = this.state;

        const user = userQueue[pointer];

        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={() => this.movePointer(-1)}>
                    <Text style={styles.arrow}>{"〈"}</Text>
                </TouchableOpacity>


                {/* Todo Turn을 붙일지 말지 고민할 것 */}
                <View style={styles.centerBox}>
                    <Text style={styles.userText}>
                        {user.name} : {("score" in user ? (user as TurnScoreUser).score : 0)}
                    </Text>
                </View>

                <TouchableOpacity onPress={() => this.movePointer(1)}>
                    <Text style={styles.arrow}>{"〉"}</Text>
                </TouchableOpacity>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    arrow: {
        fontSize: 30,
        fontWeight: "bold",
        padding: 10,
    },
    centerBox: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: "#e5e5e5",
    },
    userText: {
        fontSize: 20,
        fontWeight: "600",
    },
});