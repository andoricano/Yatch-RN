import React from 'react';
import { View, Button, StyleSheet, ImageSourcePropType } from 'react-native';
import { DiceWidget } from './DiceWidget';
import { Dice, diceFaces, initialDice } from './Dice';
import { DiceManager } from './DiceManager';


interface DiceLayoutProps {
    width?: string;
    height?: string;
    layoutBackgroundColor?: string;
    widgetBackgroundColor?: string;
}

export class DiceLayout extends React.Component<DiceLayoutProps> {
    diceManager: DiceManager;

    constructor(props: DiceLayoutProps) {
        super(props);
        this.diceManager = new DiceManager(initialDice);
    }

    handlePress = () => {
        this.diceManager.startRolling();
    };

    render() {
        const { width = '80%', height = '50%', layoutBackgroundColor = '#f0fe0f' } = this.props;

        return (

            <View style={[styles.container, { width, height, backgroundColor: layoutBackgroundColor } as any]}>
                <DiceWidget diceManager={this.diceManager} />
                <Button title="Dice" onPress={this.handlePress} />
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
});