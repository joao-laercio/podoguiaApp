import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from '@react-navigation/native'
// import Routes from "./components/Routes/Index"


import { createNativeStackNavigator } from "@react-navigation/native-stack";

import home from "./pages/Inicial/home"
import listapodo from "./pages/Podogos/listapodo"
import detalharpodo from "./pages/Podogos/detalharpodo"

const Stack = createNativeStackNavigator();

export default props => (

    <NavigationContainer>
        <StatusBar backgroundColor={"#00c293"} barStyle='light-content' />
        {/* <Routes/> */}
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen name='home' component={home} options={{ headerShown: false }} />
            <Stack.Screen name='listapodo' component={listapodo} 
            options={()=> {
                return { title: "Podologos"}
            }}/>
            <Stack.Screen name='detalharpodo' component={detalharpodo} 
             options={()=> {
                return { title: "Perfil Podologo"}
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
)