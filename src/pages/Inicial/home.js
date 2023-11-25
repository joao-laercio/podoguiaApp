import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default props => {
    return(
        <View style={styles.container }>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/logo_podo.png')}
                    style={{ width: '100%'}}
                    resizeMode="contain" />
            </View>
            <View style={styles.containerFom}>
            <Text style={styles.title}>Encontre os melhores Podologo aqui</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('listapodo')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffff'
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems:'center'
    },
    containerFom: {
        flex:1,
        backgroundColor: '#00c293',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        color: '#ffff',
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    button:{
        position: 'absolute',
        backgroundColor: '#ffff',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#00c293',
        fontWeight: 'bold'
    },

})