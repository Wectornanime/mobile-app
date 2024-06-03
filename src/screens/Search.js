import { useState } from 'react';
import axios from 'axios';
import { ActivityIndicator, Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [gameList, setGameList] = useState(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        setGameList(null);
        try {
            const response = await axios.get(`https://api.mobygames.com/v1/games?api_key=moby_iAAI2vqHuifgtzZ1eyVTQ41ofWG&title=${searchTerm}`);

            const games = response.data.games;
            let gameItemList = [];

            games.forEach(game => {
                let gamePlatforms = [];

                game.platforms.forEach(platform => {
                    gamePlatforms.push(platform.platform_name)
                });

                let gameItem = (
                    <View style={styles.resultItem}>
                        <Image
                            style={styles.gameCover}
                            source={{
                                uri: `${(game.sample_cover) ? (game.sample_cover.image) : ('https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019')}`,
                            }}
                        />
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>{game.title}</Text>
                            <Text>{gamePlatforms.join(', ')}</Text>
                        </View>
                    </View>
                );

                gameItemList.push(gameItem);
            });

            setGameList(gameItemList);
        } catch (err) {
            setError('Algo deu errado, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome de um jogo"
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                />
                <Button
                    style={styles.button}
                    title="Buscar"
                    onPress={handleSearch}
                />
            </View>
            <ScrollView style={styles.resultContainer}>
                {gameList && gameList}
                {loading && <ActivityIndicator style={styles.activityIndicator} size="large" color="#0000ff" />}
                <ActivityIndicator style={styles.activityIndicator} size="large" color="#0000ff" />
                {error && <Text style={styles.errorText}>{error}</Text>}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'flex-start',
        gap: 15,
    },
    searchContainer: {
        gap: 5,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center'
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
        width: '75%',
    },
    button: {
        justifyContent: 'center',
        alignContent: 'center',
        padding: 'auto',
    },
    resultContainer: {
        paddingHorizontal: 10,
    },
    activityIndicator: {
        margin: 'auto',
    },
    resultItem: {
        gap: 5,
        flexDirection: 'row',
        paddingBottom: 5,
    },
    gameCover: {
        width: 50,
        height: 75,
        resizeMode: 'cover',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
    resultText: {
        marginTop: 20,
    },
});
