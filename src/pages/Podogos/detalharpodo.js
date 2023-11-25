import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default props => {
    const [podoguia, setPodoguia] = useState({})
    const { id } = props.route.params

    fetch(`https://rosiecruz13.pythonanywhere.com/api/podoguia/${id}`)
        .then(data => data.json())
        .then(json => setPodoguia(json))
        .catch(error => console.warn(error))

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image
                    source={{ uri: podoguia.avatar }}
                    style={styles.avatar} />
                <Text style={styles.name}>{podoguia.nome}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Email:</Text>
                <Text style={styles.infoValue}>{podoguia.email}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Endereco:</Text>
                <Text style={styles.infoValue}>{podoguia.endereco}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Bio:</Text>
                <Text style={styles.infoValue}>{podoguia.info}</Text>
            </View>
            <View style={styles.containerFom}>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL( `https://wa.me/${podoguia.whatsapp}`) }>
                    <Text style={styles.buttonText}>Agendar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    infoContainer: {
        marginTop: 20,
    },
    infoLabel: {
        fontWeight: 'bold',
    },
    infoValue: {
        marginTop: 5,
    },
    containerFom: {
        flex:1,
        backgroundColor: '#ffff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },    
    button:{
        position: 'absolute',
        backgroundColor: '#00c293',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#ffff',
        fontWeight: 'bold'
    },

});