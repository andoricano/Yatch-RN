import React from 'react';
import { View, Button, StyleSheet, ImageSourcePropType } from 'react-native';
import { DiceWidget } from './DiceWidget';
import { initialDice } from './Dice';
import { DiceManager } from './DiceManager';
import { DiceWidgetMultiLine } from './DiceWidgetMultiLine'


interface DiceLayoutProps {
    width?: string;
    height?: string;
    layoutBackgroundColor?: string;
    widgetBackgroundColor?: string;
    oneLine?: boolean;
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

        if (this.props.oneLine === true)
            return (
                <View style={[styles.container, { width, height, backgroundColor: layoutBackgroundColor } as any]}>
                    <DiceWidget diceManager={this.diceManager} />
                    <Button title="Dice" onPress={this.handlePress} />
                </View>
            );
        else
            return (
                <View style={[styles.container, { width, height, backgroundColor: layoutBackgroundColor } as any]}>
                    <DiceWidgetMultiLine diceManager={this.diceManager} />
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
        overflow: 'hidden'
    },
});