import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

interface InputTwoButtonItemProps {
    firstScheme : string;
    initialInput: string;
    onInputChange: (newValue: string) => void;
}

export class InputTwoButtonItem extends React.Component<InputTwoButtonItemProps> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.firstScheme}</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={this.props.initialInput}
                    onChangeText={(text) => this.props.onInputChange(text)}
                    placeholder="이름을 입력하세요"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#e9e9e9ff',
        borderRadius: 8,
        margin: 5,
    },
    label: {
        marginRight: 10,
        fontWeight: 'bold',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 4,
        backgroundColor: '#fff',
    },
});