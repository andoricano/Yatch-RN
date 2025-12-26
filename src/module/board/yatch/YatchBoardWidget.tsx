import React from 'react';
import { Text, View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { Subscription } from 'rxjs';
import { YatchBoardManager } from './YatchBoardManager';


interface YatchBoardWidgetProps {
    boardManager: YatchBoardManager;
    backgroundColor?: string;
}

const YatchBoardItemImage =[
    require('./rsc/dice1.png'),
    require('./rsc/dice2.png'),
    require('./rsc/dice3.png'),
    require('./rsc/dice4.png'),
    require('./rsc/dice5.png'),
    require('./rsc/dice6.png'),

    require('../../../../rsc/dice1.png'),
    require('../../../../rsc/dice2.png'),
    require('../../../../rsc/dice3.png'),
    require('../../../../rsc/dice4.png'),
    require('../../../../rsc/dice5.png'),
    require('../../../../rsc/dice6.png'),
    require('../../../../rsc/dice1.png'),
]

export class YatchBoardWidget extends React.Component<YatchBoardWidgetProps> {
    boardManager: YatchBoardManager;
    subscription!: Subscription;

    constructor(props: YatchBoardWidgetProps) {
        super(props);
        this.boardManager = props.boardManager;
    }

    state = {
        board: this.props.boardManager.board,
    };

    componentDidMount() {
        this.subscription = this.boardManager.board$.subscribe(board => {
            this.setState({ board });
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        const { backgroundColor = '#f0f0f0' } = this.props;
        const { board } = this.state;


        return (
            <View style={[styles.container, { backgroundColor }]}>
                {Object.entries(board).map(([key, value], idx) => (
                    <View
                        key={key}
                        style={[
                            styles.itemBox,
                            idx < 6 ? styles.halfWidth : styles.fullWidth,
                        ]}
                    >
                        <Image
                            source={YatchBoardItemImage[idx]}
                            style={styles.img}
                        />
                        <Text style={styles.name}>{key}</Text>
                        <Text style={styles.score}>{value}</Text>
                    </View>
                ))}
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        justifyContent: "center",
    },

    itemBox: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        margin: 5,
        backgroundColor: "#fff",
        borderRadius: 12,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },

    halfWidth: {
        width: "45%",
    },

    fullWidth: {
        width: "93%",
    },

    img: {
        width: 40,
        height: 40,
        marginRight: 12,
    },

    name: {
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
        marginRight: 8,
    },

    score: {
        fontSize: 16,
        color: "#333",
    },
});