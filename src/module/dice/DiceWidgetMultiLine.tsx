import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native'; import { DiceManager } from './DiceManager';
import { Subscription } from 'rxjs';


interface DiceWidgetMultiLineProps {
    diceManager: DiceManager;
    backgroundColor?: string;
}


export class DiceWidgetMultiLine extends React.Component<DiceWidgetMultiLineProps> {
    diceManager: DiceManager;

    subscription!: Subscription;

    constructor(props: DiceWidgetMultiLineProps) {
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

                {/* 위 2개 */}
                <View style={styles.row}>
                    {dice.slice(0, 2).map((d, idx) => (
                        <Image
                            key={'top-' + idx}
                            source={d.faces[d.current - 1]}
                            style={styles.diceImage}
                        />
                    ))}
                </View>

                {/* 아래 3개 */}
                <View style={styles.row}>
                    {dice.slice(2, 5).map((d, idx) => (
                        <Image
                            key={'bottom-' + idx}
                            source={d.faces[d.current - 1]}
                            style={styles.diceImage}
                        />
                    ))}
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    diceImage: {
        width: 50,
        height: 50,
        margin: 5,
    },
});