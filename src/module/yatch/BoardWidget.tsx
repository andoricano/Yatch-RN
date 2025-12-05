import React from 'react';
import { Text, View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { Subscription } from 'rxjs';
import { BoardManager } from './BoardManager';


interface boardWidgetProps {
    boardManager: BoardManager;
    backgroundColor?: string;
}


export class BoardWidget extends React.Component<boardWidgetProps> {
    boardManager: BoardManager;
    subscription!: Subscription;

    constructor(props: boardWidgetProps) {
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
                {Object.entries(board).map(([key, value]) => (
                    <View key={key} style={{ margin: 5 }}>
                        <Text>{key}: {value}</Text>
                    </View>
                ))}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    text: {
        fontSize: 18,
        color: '#000',
        marginHorizontal: 8,
    },
});