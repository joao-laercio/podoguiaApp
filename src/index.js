import { createNativeStackNavigator } from "@react-navigation/native-stack";

import home from "../pages/Inicial/home"
import listapodo from "../pages/Podogos/listapodo"
import detalharpodo from "../pages/Podogos/detalharpodo"

const Stack = createNativeStackNavigator();

export default props => (
    
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen name='home' component={home} options={{ headerShown: false }} />
            <Stack.Screen name='listapodo' component={listapodo} />
            <Stack.Screen name='detalharpodo' component={detalharpodo} />
        </Stack.Navigator>
    )