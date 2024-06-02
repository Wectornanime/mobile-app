import { StyleSheet, Text, View } from 'react-native';

export default function Map() {
    return (
        <View style={styles.container}>
            <Text>Hey, this Map is running!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
