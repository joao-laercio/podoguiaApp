import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity } from "react-native";
import { SearchBar } from '@rneui/themed';

export default props => {

    const [podogos, setPodogos] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {

        fetch('https://rosiecruz13.pythonanywhere.com/api/podoguia/')

        fetch(`https://rosiecruz13.pythonanywhere.com/api/podoguia/`)

            .then(data => data.json())
            .then(json => setPodogos(json.results))
            .catch(error => console.warn(error))
    }, [])


    const updateSearch = (q) => {
        setSearch(q);
        if (search == "") {

            fetch('https://rosiecruz13.pythonanywhere.com/api/podoguia/')

            fetch(`https://rosiecruz13.pythonanywhere.com/api/podoguia/`)

                .then(data => data.json())
                .then(json => setPodogos(json.results))
                .catch(error => console.warn(error))
        } else {

            fetch(`https://rosiecruz13.pythonanywhere.com/api/podoguia/?search=${search}`)

                .then(data => data.json())
                .then(json => setPodogos(json.results))
                .catch(error => console.warn(error))
        }
    };

    const ProductCard = ({ item }) => {
        return (
            

            <TouchableOpacity onPress={() => { props.navigation.navigate('detalharpodo', { id: item.id }) }}>
                <View style={styles.productCard}>
                    <Image source={{ uri: item.avatar }} style={styles.productImage} />
                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>{item.nome}</Text>
                        <Text style={styles.productDescription}>{item.info}</Text>
                    </View>
                </View >
            </TouchableOpacity>
            
        );
    };

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Buscar podologo..."
                onChangeText={updateSearch}
                value={search}
                platform="android"
            />
            <FlatList
                data={podogos}
                style={styles.productList}
                renderItem={ProductCard}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        paddingTop: 16,
    },
    regiao:{
      fontSize:10,  
    },
    productList: {
        flex: 1,
        paddingTop: 16,
    },
    productCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        padding: 16,
        marginBottom: 16,
    },
    productImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 16,
    },
    productInfo: {
        flex: 1,
        marginRight: 16,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4caf50',
    },
    productPriceText: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#666',
    },
    productAmount: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    amountButton: {
        width: 30,
        height: 30,
        backgroundColor: '#ffa726',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    amountButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    amountText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 16,
    },
    continueButton: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        backgroundColor: '#4caf50',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});