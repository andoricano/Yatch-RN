import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import { BasicYatchUserItem } from './item/BasicYatchUserItem';

interface AddListProps {
    baseList: string[];
    onListChange: (newValue: string) => void;
}

export class AddList extends React.Component<AddListProps> {
    constructor(props: AddListProps) {
        super(props);
        this.state = {
            inputText: '',
        };
    }

    handleAdd = () => {
        
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.baseList}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                        <BasicYatchUserItem 
                            initialInput={item}
                            onInputChange={()=>{}}
                            onButtonPress={()=>{}}
                        />
                    )}
                    contentContainerStyle={styles.listContent}
                />

                <View style={styles.inputContainer}>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity style={styles.addButton} onPress={this.handleAdd}>
                            <Text style={styles.buttonText}>+ 추가하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    listContent: {
        paddingBottom: 20,
    },
    listItem: {
        padding: 15,
        backgroundColor: '#f1f1f1',
        marginBottom: 8,
        borderRadius: 5,
    },
    inputContainer: {
        marginTop: 10,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    buttonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});