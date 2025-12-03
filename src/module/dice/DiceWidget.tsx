import React from 'react';
import { View, Button, StyleSheet, ImageSourcePropType } from 'react-native';
import { DiceManager } from './DiceManager';
import { Dice } from './Dice';
import { BehaviorSubject, Subscription } from 'rxjs';


const diceFaces: ImageSourcePropType[] = [
    require('../../../rsc/dice_1.png'),
    require('../../../rsc/dice_2.png'),
    require('../../../rsc/dice_3.png'),
    require('../../../rsc/dice_4.png'),
    require('../../../rsc/dice_5.png'),
    require('../../../rsc/dice_6.png'),
];

const initialDice: Dice[] = Array.from({ length: 5 }, () => ({
    faces: diceFaces,
    current: 1,
}));

export class DiceWidget extends React.Component {
    diceManager = new DiceManager(initialDice);
    subscription!: Subscription;

    componentDidMount() {
        this.subscription = this.diceManager.dice$.subscribe(dice => {
            console.log('Dice 상태 변경:', dice.map(d => d.current));
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }


    handlePress = () => {
        this.diceManager.startRolling()
    };



    render() {
        return (
            <View style={styles.container}>
                <Button title="DiceTest" onPress={this.handlePress} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});