import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
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
        dice: this.props.boardManager.board,
    };

    componentDidMount() {
        
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }


    handlePress = () => {
        
    };


    render() {
        const { backgroundColor = '#f0f0f0' } = this.props;

        return (
            <View style={[styles.container, { backgroundColor }]}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    diceImage: {
        width: 50,
        height: 50,
        marginHorizontal: 5,
    },
});