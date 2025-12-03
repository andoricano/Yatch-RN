import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native'; import { DiceManager } from './DiceManager';
import { Subscription } from 'rxjs';


interface DiceWidgetProps {
    diceManager: DiceManager;
    backgroundColor?: string;
}


export class DiceWidget extends React.Component<DiceWidgetProps> {
    diceManager: DiceManager;

    subscription!: Subscription;

    constructor(props: DiceWidgetProps) {
        super(props);
        this.diceManager = props.diceManager;
    }
    state = {
        dice: this.props.diceManager.dice,
    };

    componentDidMount() {
        this.subscription = this.props.diceManager.dice$.subscribe(dice => {
            this.setState({ dice });
            console.log('Dice 상태 변경:', dice.map(d => d.current));
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }


    handlePress = () => {
        this.diceManager.startRolling();
    };


    render() {
        const { backgroundColor = '#f0f0f0' } = this.props;
        const { dice } = this.state;

        return (
            <View style={[styles.container, { backgroundColor }]}>
                {dice.map((d, idx) => (
                    <Image
                        key={idx}
                        source={d.faces[d.current - 1]}
                        style={styles.diceImage}
                    />
                ))}
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