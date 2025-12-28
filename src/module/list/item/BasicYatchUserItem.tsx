import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface BasicYatchUserItemProps {
    initialInput: string;
    onInputChange: (newValue: string) => void;
    onButtonPress?: () => void;
}

export class BasicYatchUserItem extends React.Component<BasicYatchUserItemProps> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>이름</Text>

                <TextInput
                    style={styles.input}
                    defaultValue={this.props.initialInput}
                    onChangeText={(text) => this.props.onInputChange(text)}
                    placeholder="이름 입력"
                />

                <View style={styles.buttonGroup}>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonLeft]}
                        onPress={() => {

                        }}
                    >
                        <Icon name="refresh" size={20} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.deleteButton]}
                        onPress={this.props.onButtonPress}
                    >
                        <Icon name="trash-can-outline" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#e9e9e9',
        borderRadius: 8,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    label: {
        marginRight: 10,
        fontWeight: 'bold',
        minWidth: 40,
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


    buttonLeft: {
        marginRight: 5,
        backgroundColor: '#2196F3',
    },
    buttonRight: {
        backgroundColor: '#2196F3',
    },
    buttonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    buttonGroup: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    button: {
        height: 40,
        width: 40, // 아이콘 버튼은 정사각형이 예쁩니다
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    refreshButton: {
        marginRight: 5,
        backgroundColor: '#757575', // 회색 (새로고침)
    },
    deleteButton: {
        backgroundColor: '#FF5252', // 빨간색 (휴지통)
    },
});